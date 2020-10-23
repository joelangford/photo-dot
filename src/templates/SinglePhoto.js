import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SinglePhotoStyles = styled.div`
  margin: 50px auto;
  max-width: 1024px;

  @media (min-width: 768px) {
    margin: 100px auto;
  }

  .single-photo__heading {
    margin: 1rem;

    @media (min-width: 1024px) {
      margin: 1rem 0;
    }
  }

  .single-photo__image {
    margin-bottom: 1rem;
  }

  .single-photo__link {
    font-size: 0.9rem;
    margin: 0 1rem 1rem;

    @media (min-width: 1024px) {
      margin: 0 0 1rem;
    }
  }

  .single-photo__size {
    margin-left: 0.25em;
  }

  .single-photo__back-btn {
    border-bottom: 0;
    display: block;
    margin-bottom: 1rem;
    text-decoration: none;
    margin: 0 1rem;

    @media (min-width: 1024px) {
      margin: 0;
    }
  }

  .single-photo__back-text {
    border-bottom: 1px solid var(--colour-grey);
  }

  .single-photo__under {
    display: grid;
    grid-template-rows: auto auto;
    margin: 0 1rem;

    @media (min-width: 1024px) {
      grid-template-rows: auto;
      grid-template-columns: 2fr 1fr;
      grid-gap: 1rem;
      margin: 0;
    }
  }

  .single-photo__caption {
    margin-bottom: 1rem;
  }

  .single-photo__footer {
    grid-row: 1;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      grid-row: auto;
      text-align: right;
    }
  }

  .single-photo__figure {
    margin-bottom: 0;
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
          ← <span className="single-photo__back-text">back</span>
        </Link>
        <figure className="single-photo__figure">
          {name && <h1 className="single-photo__heading">{name}</h1>}
          <Img
            className="single-photo__image"
            fluid={photo.fluid}
            alt={name || photo.fluid.originalName}
          />
          <div className="single-photo__under">
            <figcaption className="single-photo__caption">
              {description}
            </figcaption>

            <footer className="single-photo__footer">
              <small>
                Copyright {new Date().getFullYear()} &copy; Joe Langford
              </small>
            </footer>
          </div>
        </figure>
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
