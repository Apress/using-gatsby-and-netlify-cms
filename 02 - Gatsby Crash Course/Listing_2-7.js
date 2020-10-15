blogEntries.forEach(({ node }) => {
  createPage({
    path: node.fields.slug,
    component: path.resolve('./src/templates/blog.js'),
    context: {
      slug: node.fields.slug
    }
  });
});
