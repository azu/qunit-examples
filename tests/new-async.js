// LICENSE : MIT
"use strict";
QUnit.test("new async test", function (assert) {
    var done = assert.async();
    setTimeout(function () {
        assert.ok(1);
        done();
    })
});