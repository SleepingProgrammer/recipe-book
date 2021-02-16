import { Meteor } from 'meteor/meteor';
import Env from "/imports/Env";
import "/lib/Schema";

import SimpleSchema from "simpl-schema";

import ConnectionConfigurations from "/imports/ConnectionConfigurations";
import "./emails/EmailConfigurations";
import "./emails/EmailTemplates";

import "./Users";

Meteor.startup(() => {
    console.log("process.env.ROOT_URL", process.env.ROOT_URL);

});
