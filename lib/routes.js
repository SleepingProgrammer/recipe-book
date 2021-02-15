Meteor.startup(() => {
    Router.configure({ notFoundTemplate: "default" });

    Router.route("/", function () {
        this.render("default", {
            data: {},
        });
    });
});
