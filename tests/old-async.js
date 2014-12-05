// LICENSE : MIT
"use strict";
asyncTest("old async test", function (assert) {
    setTimeout(function () {
        assert.ok(true);
        start();
    }, 16);
});