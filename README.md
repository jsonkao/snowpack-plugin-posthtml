# @jsonkao/snowpack-plugin-posthtml

This plugin adds [PostHTML](https://github.com/posthtml/posthtml) support to any Snowpack project. The plugin loads your PostHTML configuration and reloads dependent HTML files when the configuration changes.

## Usage

```sh
npm i -D @jsonkao/snowpack-plugin-posthtml
```

Then add the plugin to your Snowpack config:

```js
// snowpack.config.js

module.exports = {
  plugins: [
    [
      '@snowpack/plugin-sass',
      {
        /* see options below */
      },
    ],
  ],
};
```

## Plugin Options

PostHTML configuration works out of the box. The following plugin options help when you want the changing of that configuration to reload your HTML and refresh the dev page.

| Name   |              Type              | Description                                                   |
| :----- | :----------------------------: | :------------------------------------------------------------ |
| `root` |       `string, string[]`       | Specify the directories in which the HTML should be reloaded on configuration change |
| `ctx`  | | `ctx` argument passed to [`posthtml-load-config`](https://github.com/posthtml/posthtml-load-config/blob/master/index.js#L14) |
| `path`  | | `path` argument passed to [`posthtml-load-config`](https://github.com/posthtml/posthtml-load-config/blob/master/index.js#L14) |
| `options`  | | `options` argument passed to [`posthtml-load-config`](https://github.com/posthtml/posthtml-load-config/blob/master/index.js#L14) |