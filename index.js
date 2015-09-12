var postcss = require('postcss');

module.exports = postcss.plugin('postcss-alias-atrules', function (opts) {
    opts = opts || {};
    opts.rules = opts.rules || {};

    return function (css, result) {
        if (typeof opts.rules !== 'object') {
            result.warn('rules option should be an object');
            return result;
        }
        var rulesToAlias = Object.keys(opts.rules);
        css.walkAtRules(function (rule) {
            if ( rulesToAlias.indexOf(rule.name) === -1 ) return;
            rule.name = opts.rules[rule.name];
        });
        // Transform CSS AST here

    };
});
