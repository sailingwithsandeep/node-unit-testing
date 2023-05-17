"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
function isValidUserIdAsync(userList, user, callback) {
    setTimeout(function () {
        callback(userList.indexOf(user) >= 0);
    }, 1000);
}
/* Test */
it('async test:: should return true if valid user id', function (done) {
    isValidUserIdAsync(['abc123', 'xyz321'], 'abc123', function (isValid) {
        chai_1.assert.equal(isValid, true);
        done();
    });
});
