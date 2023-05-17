import { assert } from 'chai';

function isValidUserIdAsync(userList: Array<string>, user: string, callback: Function) {
    setTimeout(function () {
        callback(userList.indexOf(user) >= 0);
    }, 1000);
}
/* Test */
it('async test:: should return true if valid user id', function (done) {
    isValidUserIdAsync(['abc123', 'xyz321'], 'abc123', function (isValid: boolean) {
        assert.equal(isValid, true);
        done();
    });
});
