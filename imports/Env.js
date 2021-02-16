var Env = {};

var MODES = ["LOCAL", "STAGE", "LIVE"];
var CURRENT_MODE = 1;
var ACTIVE_MODE = MODES[CURRENT_MODE];

switch (ACTIVE_MODE) {
    case "LOCAL":
        Env.ROOT_URL = "http://localhost:3000";
        break;
    case "STAGE":
        Env.ROOT_URL = "https://0583e4f25705.ngrok.io";
        break;
}

Env.APP_NAME = "Recipe Book";
Env.APP_DESCRIPTION = "An app to share your recipes to the whole world.";

//Social Media
Env.FACEBOOK_LINK = "https://facebook.com";
Env.TWITTER_LINK = "https://twitter.com";
Env.INSTAGRAM_LINK = "https://instagram.com";
Env.LINKED_IN_LINK = "https://linkedin.com";



export default Env;