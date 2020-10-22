import path from 'path';
import inkjet from 'inkjet';
import fs from 'fs';

import processPhotoUrlString from './src/helpers/processPhotoUrlString';

function getExif(photoPath) {
  return new Promise((resolve) => {
    inkjet.exif(fs.readFileSync(photoPath), function (err, metadata) {
      resolve(metadata);
    });
  });
}

async function photoPages({ graphql, actions }) {
  const singlePhotoTemplate = path.resolve('./src/templates/SinglePhoto.js');

  const { data } = await graphql(`
    query {
      photos: allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
        nodes {
          id
          name
          absolutePath
          base
        }
      }
      allExif: allExif {
        nodes {
          name
          fileName
          description
          id
        }
      }
    }
  `);

  async function constructPhotoPage(photo, exif) {
    const pageDir = processPhotoUrlString(photo, exif);

    actions.createPage({
      path: `/${pageDir}`,
      component: singlePhotoTemplate,
      context: {
        id: photo.id,
        base: photo.base,
        exif,
      },
    });
  }

  const photos = data.photos.nodes;
  const allExif = data.allExif.nodes;

  photos.forEach((photo) => {
    const exif = allExif.find((exifEntry) => exifEntry.fileName === photo.base);
    constructPhotoPage(photo, exif);
  });
}

async function createExifNodes({ actions, createNodeId, createContentDigest }) {
  const photosFolder = process.env.npm_package_config_photosdir;

  fs.readdir(photosFolder, (err, files) => {
    files.forEach(async (file) => {
      const exif = await getExif(`${photosFolder}/${file}`);
      const nodeMeta = {
        id: createNodeId(`exif-${file}`),
        internal: {
          type: 'exif',
          mediaType: 'application/json',
          contentDigest: createContentDigest(exif),
        },
      };
      actions.createNode({
        fileName: file,
        name: exif['Object Name'] ? exif['Object Name'].description : null,
        description: exif['Caption/Abstract']
          ? exif['Caption/Abstract'].description
          : null,
        ...nodeMeta,
      });
    });
  });
}

export async function sourceNodes(params) {
  await Promise.all([createExifNodes(params)]);
}

export async function createPages(params) {
  await Promise.all([photoPages(params)]);
}
