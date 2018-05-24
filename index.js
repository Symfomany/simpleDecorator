const User = require("./User.js");
const AuthUser = require("./authentification.js");

const anthony = new User("Anthony");
const anthonyAuth = AuthUser(anthony);
console.log(anthonyAuth.login());
