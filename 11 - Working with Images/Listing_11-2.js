const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = function({ node, getNode, actions }) {
  fmImagesToRelative(node);

  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              contentKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.contentKey === 'blog');
  posts
    .forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path
          .resolve('src/templates/blog.js'),
        context: {
          slug: node.fields.slug
        }
      });
    });

    const pageSize = 5;
    const pageCount = Math.ceil(posts.length / pageSize);

    const templatePath = path.resolve('src/templates/blog-list.js');

    for (let i = 0; i < pageCount; i++) {
      let path = '/blog';
      if (i > 0) {
        path += `/${i + 1}`;
      };
      
      createPage({
        path,
        component: templatePath,
        context: {
          limit: pageSize,
          skip: i * pageSize,
          pageCount,
          currentPage: i + 1
        }
      });
    }
};
