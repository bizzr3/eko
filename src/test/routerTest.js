'use strict';

const assert = require('chai').assert;
const Router = require('../utils/Router');

describe('Test Distict Routes:', () => {
    it(`Possible Routes between A to E should be 4`, function () {
        let router = new Router().getParsedRoutes('a', 'e');

        assert.equal(router.length, 4)
    })

    it(`Possible Routes between A to D should be 3`, function () {
        let router = new Router().getParsedRoutes('a', 'd');

        assert.equal(router.length, 3)
    })

    it(`Possible Routes between A to f should be 1`, function () {
        let router = new Router().getParsedRoutes('a', 'f');

        assert.equal(router.length, 1)
    })
});
