import assert from 'assert';

const LoginController = {
    isValidUserId(userList: Array<string>, user: string) {
        return userList.indexOf(user) >= 0;
    },
};

/* Test */
it('should return true if valid user id', function () {
    const isValid = LoginController.isValidUserId(['abc123', 'xyz321'], 'abc123');
    assert.equal(isValid, true);
});

export default LoginController;
