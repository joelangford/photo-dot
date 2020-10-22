import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import ImageList from '../components/ImageList';

const IndexPage = ({ data }) => {
  const photos = data.photos.nodes;
  const allExif = data.allExif.nodes;
  return (
    <Layout>
      <SEO title="Home" />
      <ImageList photos={photos} allExif={allExif} />
    </Layout>
  );
};

export const query = graphql`
  query ImageQuery {
    photos: allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
      nodes {
        id
        name
        base
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
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
`;

export default IndexPage;
