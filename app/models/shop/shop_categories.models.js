module.exports = (sequelize, Sequelize) => {
    const shops_C = sequelize.define("shop_categories", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      }
    });
  
    return shops_C;
  };
  