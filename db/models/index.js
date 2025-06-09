const { User, UserSchema } = require("./user.models");
const { Client, ClientSchema } = require("../models/client.models");
const { Category, CategorySchema } = require("../models/category.models");
const { Product, ProductSchema } = require("../models/products.models");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));

  User.associate(sequelize.models);
  Client.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
