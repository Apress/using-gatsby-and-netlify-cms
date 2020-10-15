import React from 'react';

import Layout from '../components/Layout';
import MenuCategory from '../components/MenuCategory';

import { graphql } from 'gatsby';

import styles from './menu.module.css';

export default function Menu({ data }) {
  return (
    <Layout>
      <div id={styles.main}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div id={styles.menu}>
          {data.markdownRemark.frontmatter.categories.map(category => (
            <MenuCategory
              key={category.name}
              category={category} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { contentKey: { eq: "menu" } }) {
      frontmatter {
        title
        categories {
          name
          items {
            name
            description
            price
          }
        }
      }
    }
  }
`;
