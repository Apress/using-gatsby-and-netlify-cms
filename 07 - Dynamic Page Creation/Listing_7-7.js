import React from 'react';

import { Link } from 'gatsby';

import styles from './BlogPost.module.css';

export default function BlogPost({ title, date, excerpt, slug }) {
  return (
    <article className={styles.blog}>
      <h2><Link to={slug}>{title}</Link></h2>
      <h3>{date}</h3>
      <p>{excerpt}</p>
    </article>
  );
}
