# PostCSS Alias Atrules [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin that creates aliases for at-rules.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/maximkoretskiy/postcss-alias-atrules.svg
[ci]:      https://travis-ci.org/maximkoretskiy/postcss-alias-atrules

```css
@b nav { /* b is for block */
    @e item { /* e is for element */
        display: inline-block;
    }
    @m placement_header {
        background-color: red;
    }
}
```

```css
@component nav { /* b is for block */
    @descedent item { /* e is for element */
        display: inline-block;
    }
    @modificator placement_header {
        background-color: red;
    }
}
```

## Usage

```js
postcss([ require('postcss-alias-atrules'){
    rules: {
            b: 'component',
            e: 'descedent',
            m: 'modificator'
        }
    } ])
```

See [PostCSS] docs for examples for your environment.
