// LICENSE : MIT
"use strict";

QUnit.test("fulfilled Promise", function (assert) {
    assert.expect(1);// it's work!
    return Promise.resolve("value").then(function (value) {
        assert.equal(value, "value")
    });
});

QUnit.test("Year! Fail test", function (assert) {
    return Promise.resolve("value").catch(function (value) {
        assert.equal(value, "value")
    });
});