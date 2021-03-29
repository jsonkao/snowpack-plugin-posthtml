const posthtml = require('posthtml');
const posthtmlrc = require('posthtml-load-config');
const path = require('path');

// TODO: track where roots are in PostHTML config; update HTMLs accordingly
// const roots = new Set();

module.exports = function (snowpackConfig, { root = '', configOptions = {} }) {
  return {
    name: 'snowpack-plugin-posthtml',
    async transform({ fileExt, contents }) {
      if (fileExt === '.html') {
        const { plugins: postPlugins, options: postOptions } = await posthtmlrc(
          configOptions.ctx,
          configOptions.postPath,
          configOptions.options,
        );
        return (await posthtml(postPlugins).process(contents, postOptions))
          .html;
      }
    },
    onChange({ filePath }) {
      const basename = path.basename(filePath);
      if (basename.includes('posthtml'))
        this.markChanged(path.join(process.cwd(), root, '/index.html'));
    },
  };
};
