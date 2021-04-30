// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Tag,
    unique: false
  },
  as: 'product_options'
});

// Categories have many Products
Category.haveMany(Product, {
  through: {
    model: Tag,
    unique: false
  },
  as: 'category_choice'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_progress'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_options'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
