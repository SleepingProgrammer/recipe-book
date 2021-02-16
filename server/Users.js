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
     * @description Will check if username is available
     */
    isUsernameAvailable: function (username) {
        var match = global.Users.findOne({ username: username });

        return (match) ? false : true;
    },

    /**
     * 
     * @param {string} username 
     * @description Will check if username is available
     */
    isEmailAvailable: function (email) {
        var match = global.Users.findOne({ "emails.address": email });

        return (match) ? false : true;
    },

    /**
     * 
     * @param {string} username 
     * @param {string} email 
     * @param {string} password 
     */
    registerUser: function (username, email, password) {
        var username_available = Meteor.call("isUsernameAvailable", username);
        if (!username_available) {
            return {
                status: "Error",
                alert: "danger",
                message: "Username is already taken"
            };
        }

        var email_available = Meteor.call("isEmailAvailable", email);
        if (!email_available) {
            return {
                status: "Error",
                alert: "danger",
                message: "Email is already taken"
            };
        }


        switchEmailServer();

        var userId = Accounts.createUser({
            username: username,
            password: password,
            email: email,
            primary_email: email,
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