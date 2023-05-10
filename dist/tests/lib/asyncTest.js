"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function isValidUserIdAsync(userList, user, callback) {
    setTimeout(function () {
        callback(userList.indexOf(user) >= 0);
    }, 1000);
}
/* Test */
it('async test:: should return true if valid user id', function (done) {
    isValidUserIdAsync(['abc123', 'xyz321'], 'abc123', function (isValid) {
        assert_1.default.equal(isValid, true);
        done();
    });
});
