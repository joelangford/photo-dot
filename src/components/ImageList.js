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
    margin: 80px auto 0;
  }
`;

const ImageList = ({ photos, allExif }) => (
  <ImageListStyles>
    {photos.map((photo) => {
      const exif = allExif.find(
        (exifEntry) => exifEntry.fileName === photo.base
      );

      const name = exif.name ? exif.name : null;

      return (
        <Link to={processPhotoUrlString(photo, exif)} key={photo.id}>
          <Img
            fluid={photo.childImageSharp.fluid}
            alt={name || photo.fluid.originalName}
          />
        </Link>
      );
    })}
  </ImageListStyles>
);

export default ImageList;
