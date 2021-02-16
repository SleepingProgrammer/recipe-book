
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

global = {};

global.Recipes = new Mongo.Collection("recipes");
global.Users = Meteor.users;


Schema = {};

Schema.Recipes = new SimpleSchema({
    ingredients: {
        type: Array
    },
    "ingredients.$": {
        type: String
    },
    steps: {
        type: String
    },
    lastUpdated: {
        type: Date
    }
})

global.Recipes.attachSchema(Schema.Recipes);