module.exports = (sequelize, Sequelize) => {
    const shops = sequelize.define("shops", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.INTEGER
      }
    });
    return shops;
  };
  