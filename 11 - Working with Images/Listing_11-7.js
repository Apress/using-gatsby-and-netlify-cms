import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import styles from './Layout.module.css';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "coffee.jpg" } ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <BackgroundImage 
        id={styles.header}
        fluid={data.file.childImageSharp.fluid}>
        <div id={styles.inner}>
          <h1><Link to="/">Joe's Coffee Shop</Link></h1>
          <Link to="/blog">Blog</Link>
          <Link to="/menu">Menu</Link>
        </div>
      </BackgroundImage>
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
