
Accounts.onEmailVerificationLink(function (token, done) {
    console.log("Email verification start");
    Accounts.verifyEmail(token, function (error) {
        if (error) {
            // handle the error, perhaps by showing the user a message about an invalid token
        }

        console.log("Email verified");
        done();
    });
});


function onSuccessLogin(a, b, c) {
    console.log("onSuccessLogin");
    console.log(a, b, c);
}

function onFailLogin(a, b, c) {
    console.log("onFailLogin");
    console.log(a, b, c);
}

Accounts.onLogin(onSuccessLogin);
Accounts.onLoginFailure(onFailLogin);
