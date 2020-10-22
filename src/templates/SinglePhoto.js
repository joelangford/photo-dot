import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SinglePhotoStyles = styled.div`
  margin-top: 100px;
  margin: 100px auto;
  max-width: 1024px;

  .single-photo__image {
    margin-bottom: 1rem;
  }

  .single-photo__link {
    padding-top: 1rem;
  }

  .single-photo__size {
    margin-left: 0.25em;
    /* font-size: 75%; */
  }

  .single-photo__back-btn {
    border-bottom: 0;
    display: block;
    margin-bottom: 1rem;
    text-decoration: none;
  }

  .single-photo__back-text {
    border-bottom: 1px solid var(--colour-grey);
  }
`;

export default function SinglePhoto({
  data: { photo },
  pageContext: { exif },
}) {
  const name = exif.name ? exif.name : null;
  const description = exif.description ? exif.description : null;

  return (
    <Layout>
      <SEO title={name || photo.fluid.originalName} />
      <SinglePhotoStyles>
        <Link className="single-photo__back-btn" to="/">
          ← <span className="single-photo__back-text">Back</span>
        </Link>

        {name && <h1>{name}</h1>}
        <Img className="single-photo__image" fluid={photo.fluid} />
        {description && <p>{description}</p>}
        <a
          className="single-photo__link"
          href={photo.original.src}
          target="_blank"
          rel="noreferrer"
        >
          Download original
          <span className="single-photo__size">
            ({photo.original.width}px x {photo.original.height}px)
          </span>
        </a>
      </SinglePhotoStyles>
    </Layout>
  );
}

export const query = graphql`
  query($base: String!) {
    photo: imageSharp(fluid: { originalName: { eq: $base } }) {
      id
      fluid(maxWidth: 1024) {
        originalName
        ...GatsbyImageSharpFluid
      }
      original {
        src
        height
        width
      }
    }
  }
`;
