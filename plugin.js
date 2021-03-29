const posthtml = require('posthtml');
const posthtmlrc = require('posthtml-load-config');
const path = require('path');

// TODO: track where roots are in PostHTML config; update HTMLs accordingly
const roots = Set();

module.exports = function (snowpackConfig, { root = process.cwd(), ctx, path: postPath, options }) {
  return {
    name: 'snowpack-plugin-posthtml',
    async transform({ fileExt, contents }) {
      if (fileExt === '.html') {
        const { plugins: postPlugins, options: postOptions } = await posthtmlrc(
          ctx,
          postPath,
          options,
        );
        return (await posthtml(postPlugins).process(contents, postOptions))
          .html;
      }
    },
    onChange({ id, fileExt }) {
      const basename = path.basename(id, fileExt);
      if (basename.includes('posthtml'))
        this.markChanged(root + '/index.html');
    },
  };
};
