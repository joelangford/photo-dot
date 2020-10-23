import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import processPhotoUrlString from '../helpers/processPhotoUrlString';

const ImageListStyles = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin: 80px auto;
  }
`;

const ImageList = ({ photos, allExif }) => {
  console.log(allExif);
  console.log(photos);
  return (
    <ImageListStyles>
      {photos.map((photo) => {
        const exif = allExif.find(
          (exifEntry) => exifEntry.fileName === photo.base
        );
        console.log(exif);

        return (
          <Link to={processPhotoUrlString(photo, exif)}>
            <Img fluid={photo.childImageSharp.fluid} />
          </Link>
        );
      })}
    </ImageListStyles>
  );
};

export default ImageList;
