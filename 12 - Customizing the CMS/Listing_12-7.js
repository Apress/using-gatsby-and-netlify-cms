import React from 'react';

import '../global.css';

import Menu from '../components/Menu';

export default function MenuPreview({ entry }) {
  const menu = entry.getIn(['data']).toJS();

  const data = {
    markdownRemark: {
      frontmatter: {
        ...menu
      }
    }
  };

  return <Menu data={data} />;
}
