module.exports = (sequelize, Sequelize) => {
    const shop_items = sequelize.define("shop_items", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      category_id: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      damage: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      nbt: {
        type: Sequelize.STRING
      }
    });
    return shop_items;
  };
  