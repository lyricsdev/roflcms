module.exports = (sequelize, Sequelize) => {
    const shop_SH = sequelize.define("shop_category_shop", {
      shop_category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true

      },
      shop_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return shop_SH;
  };
  