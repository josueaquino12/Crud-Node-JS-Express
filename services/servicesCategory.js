const { models } = require("../libs/sequelize");

const allCategory = async () => {
  try {
    const CategoryAll = await models.Category.findAll();
    return CategoryAll;
  } catch (error) {
    console.log(error);
  }
};

const oneCategory = async (id) => {
  try {
    const categoryOne = await models.Category.findByPk(id);
    return categoryOne;
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (body) => {
  try {
    const categoryCreate = await models.Category.create(body);
    return categoryCreate;
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (id, body) => {
  try {
    const categoryUpdate = await models.Category.findByPk(id, body);
    return categoryUpdate;
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (id) => {
  try {
    const categoryDelete = await models.Category.findOne(id);
    await categoryDelete.destroy();
    return {
      message: "Category delete",
      id,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allCategory,
  oneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
