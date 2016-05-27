module.exports = function (username, password) {
    var path = require("path"),
        config = require("./config.json"),
        User = require(path.join(__dirname, "models", "user.js")),
        mongoose_uri = process.env.MONGOOSE_URI || "localhost/express-jwt-auth";
         var user = new User();

    // var args = process.argv.slice(2);

    // var username = args[0];
    // var password = args[1];

    // if (args.length < 2) {
    //     console.log("usage: node %s %s %s", path.basename(process.argv[1]), "user", "password");
    //     process.exit();
    // }

    console.log("Username: %s", username);
    console.log("Password: %s", password);

    console.log("Creating a new user in Mongo");


    var mongoose = require('mongoose');
    mongoose.set('debug', true);
    console.log(mongoose_uri)
    console.log( mongoose.connect(mongoose_uri));
    mongoose.connection.on('error', function () {
        console.log('Mongoose connection error', arguments);
    });
    console.log("Mongoose connected to the database");
        user.username = username;
        user.password = password;
        user.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);

            }
        });
    // mongoose.connection.once('open', function callback() {
        
    // });

 //   return user
}
