import React from 'react';

import MenuPage from '../pages/menu';

export default function MenuPreview({ entry }) {
  const menu = entry.getIn(['data']).toJS();

  const data = {
    markdownRemark: {
      frontmatter: {
        ...menu
      }
    }
  };

  return <MenuPage data={data} />;
}
