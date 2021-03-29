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
      '@jsonkao/snowpack-plugin-posthtml',
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
| `root` |       `string, string[]`       | Specify the local directories in which the HTML should be reloaded on configuration change |
| `configOptions.*` | `object` | Pass [`posthtml-load-config` options](https://github.com/posthtml/posthtml-load-config/blob/master/index.js#L14) directly to the loader (see `configOptions`).

## `configOptions`

These options are passed directtly into the main [`posthtml-load-config` function](https://github.com/posthtml/posthtml-load-config/blob/master/index.js#L14). They may be helpful, for instance, if your PostHTML configuration is not in your application's root directory.

| Name   |              Type              | Description                                                   |
| :----- | :----------------------------: | :------------------------------------------------------------ |
| `ctx`  | `object` | The context [evaluated while](https://github.com/posthtml/posthtml-load-config#context) loading your config |
| `path`  | `string` | Path in which I should look for your config |
| `options`  | `object` | Options passed directly to [`cosmiconfig`](https://github.com/davidtheclark/cosmiconfig#cosmiconfigoptions) |