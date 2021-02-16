
import { Mongo } from "meteor/mongo";

global = {};

global.Recipes = new Mongo.Collection("recipes");
global.Users = Meteor.users;