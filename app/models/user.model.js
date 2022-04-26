module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    uuid: {
      type: Sequelize.STRING
    },
    accessToken: {
      type: Sequelize.STRING
    },
    serverID: {
      type: Sequelize.STRING
    },
    hwidId: {
      type: Sequelize.STRING
    },
    balance: {
      type: Sequelize.INTEGER
    },
  });
  return User;
};
