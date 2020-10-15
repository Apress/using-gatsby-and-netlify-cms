import React from 'react';

import styles from './Menu.module.css';

import MenuCategory from './MenuCategory';

export default function Menu({ data }) {
  return (
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
  );
}
