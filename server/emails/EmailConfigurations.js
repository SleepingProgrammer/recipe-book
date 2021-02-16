import ConnectionConfigurations from "/imports/ConnectionConfigurations";
var EMAIL_COUNTER = 0;
var smtps = [];

console.log(ConnectionConfigurations);
smtps.push({
    username: ConnectionConfigurations.EMAIL.username_1,
    password: ConnectionConfigurations.EMAIL.password_1,
    server: 'smtp.gmail.com',
    port: 587
});


switchEmailServer = function () {
    EMAIL_COUNTER++;
    if (EMAIL_COUNTER >= smtps.length) {
        EMAIL_COUNTER = 0;
    }

    var smtp = smtps[EMAIL_COUNTER];
    Accounts.emailTemplates.from = `Jesse <${smtp.username}>`;
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    console.log(`main url now ${process.env.MAIL_URL}`);
}

switchEmailServer();