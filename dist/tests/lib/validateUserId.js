"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const LoginController = {
    isValidUserId(userList, user) {
        return userList.indexOf(user) >= 0;
    },
};
/* Test */
it('should return true if valid user id', function () {
    const isValid = LoginController.isValidUserId(['abc123', 'xyz321'], 'abc123');
    assert_1.default.equal(isValid, true);
});
exports.default = LoginController;
