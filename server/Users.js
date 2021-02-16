import Env from "/imports/Env";

sendVerificationEmail = function (userId, email) {
    switchEmailServer();
    Accounts.emailTemplates.verifyEmail.subject = function (user) {
        return `${user.username}, confirm your email with ` + Env.APP_NAME;
    };


    Accounts.emailTemplates.siteName = Env.ROOT_URL;

    Accounts.emailTemplates.verifyEmail.html = function (user, url) {
        //alert(${user.username});
        var content = {
            verification_message: `Thank you for signing up with us, ${user.username}. Please verify your account.`,
            verification_link: url.replace(process.env.ROOT_URL, Env.ROOT_URL)
        };

        return getVerificationEmail(content);
    };


    try {
        console.log("sendVerificationEmail:Email send started!");
        var answer = Accounts.sendVerificationEmail(userId, email);
        console.log("sendVerificationEmail:answer from send ", answer);
        console.log("sendVerificationEmail:Email send successful!");
    } catch (e) {
        console.log("Accounts.sendVerificationEmail err");
        console.log(e);

    }


}

Meteor.methods({
    /**
     * 
     * @param {string} username 
     * @param {string} email 
     * @param {string} password 
     */
    registerUser: function (username, email, password) {
        switchEmailServer();
        var emailContent = {
            binx_coins: "10",
            premium_tokens: "20",
            binx_cards: "Legendary",
            expiration_date: "Test",
            tier: "Test",
        }

        var userId = Accounts.createUser({
            username: username,
            password: password,
            email: email,
        });

        if (userId) {
            console.log(`user created with id ${userId} username ${username}`);

            sendVerificationEmail(userId, email);

            return {
                status: "Success",
                alert: "success",
                message: "Registration successful"
            }
        }

        return {
            status: "Error",
            alert: "danger",
            message: "Registration failed"
        };
    }
})