module.exports = (sequelize, Sequelize) => {
    const news = sequelize.define("news", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.INTEGER
      }
    });
  
    return news;
  };
  