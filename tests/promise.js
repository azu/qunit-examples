// LICENSE : MIT
"use strict";

QUnit.test("fulfilled Promise", function (assert) {
    assert.expect(1);// it's work!
    return Promise.resolve("value").then(function (value) {
        assert.equal(value, "value")
    });
});
