const dbConfig = require("../../config/db.confog");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./product.model")(mongoose);
db.users = require("./user.model")(mongoose);

module.exports = db;
