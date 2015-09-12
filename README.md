# PostCSS Alias Atrules
[![Build Status][ci-img]][ci] [![NPM][npm-img]][npm] [![David DM][david-img]][david]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin that creates aliases for at-rules.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/maximkoretskiy/postcss-alias-atrules.svg
[ci]:      https://travis-ci.org/maximkoretskiy/postcss-alias-atrules
[npm-img]:    https://badge.fury.io/js/postcss-alias-atrules.svg
[npm]:        https://www.npmjs.com/package/postcss-alias-atrules
[david-img]:  https://david-dm.org/maximkoretskiy/postcss-alias-atrules.svg
[david]:      https://david-dm.org/maximkoretskiy/postcss-alias-atrules

```css
@i "path/to/import.css";
```

```css
@import "path/to/import.css";
```

## Usage

```js
postcss([ require('postcss-alias-atrules'){
    rules: {
            i: 'import'
        }
    } ])
```

See [PostCSS] docs for examples for your environment.
