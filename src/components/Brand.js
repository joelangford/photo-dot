import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BrandStyles = styled.div`
  .brand {
    border-bottom: 0;
    font-family: var(--typ-font-family-brand);
    font-size: 24px;
    line-height: 36px;
    letter-spacing: var(--typ-letter-spacing-brand);
    text-transform: lowercase;
  }

  .brand--light-text {
    color: var(--colour-dark-grey);
  }

  @media screen and (min-width: 768px) {
    .brand {
      display: inline-block;
      flex-grow: 0;
      font-size: 48px;
      height: 40px;
      line-height: 56px;
    }
  }

  .first-load .brand {
    animation: fadeIn 2s both;
  }
`;

const Brand = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            subDomain
            domainName
            topLevelDomain
          }
        }
      }
    `
  );
  return (
    <BrandStyles>
      <Link href="/" class="brand">
        {site.siteMetadata?.subDomain && (
          <span className="brand--light-text">
            {site.siteMetadata?.subDomain}
          </span>
        )}
        {site.siteMetadata?.domainName}
        {site.siteMetadata?.topLevelDomain && (
          <span className="brand--light-text">
            {site.siteMetadata?.topLevelDomain}
          </span>
        )}
      </Link>
    </BrandStyles>
  );
};

export default Brand;
