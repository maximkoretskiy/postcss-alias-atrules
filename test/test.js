var postcss = require('postcss');
var fs = require('fs');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};
var testWarn = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.warnings()).to.be.not.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

function f(name) {
    var fullName = './test/fixtures/' + name + '.css';
    return fs.readFileSync(fullName, 'utf8').trim();
}

describe('postcss-alias-atrules', function () {

    it('replaces one rule to another', function (done) {
        test(
            '@i "path/to/import.css"',
            '@import "path/to/import.css"',
            {
                rules: {
                    i: 'import'
                }
            },
            done);
    });
    it('should warn when rules are not defined correctly', function (done) {
        testWarn(
            '@i "path/to/import.css"',
            '@i "path/to/import.css"',
            { rules: 'string' },
            done);
    });
    it('should works with multiple rules', function (done) {
        test(
            f('bem'),
            f('bem.expected'),
            {
                rules: {
                    b: 'component',
                    e: 'descedent',
                    m: 'modificator'
                }
            },
            done);
    });

});
