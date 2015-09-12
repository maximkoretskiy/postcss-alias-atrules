# PostCSS Alias Atrules [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin that creates aliases for at-rules.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/maximkoretskiy/postcss-alias-atrules.svg
[ci]:      https://travis-ci.org/maximkoretskiy/postcss-alias-atrules

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
