module.exports = (sequelize, Sequelize) => {
    const servers = sequelize.define("servers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      ip: {
        type: Sequelize.STRING
      },
      port: {
        type: Sequelize.INTEGER
      },
      online: {
        type: Sequelize.INTEGER
      },
      max: {
        type: Sequelize.INTEGER
      },
      rcon: {
        type: Sequelize.INTEGER
      },
      rcon_port: {
        type: Sequelize.INTEGER
      },
      rcon_pass: {
        type: Sequelize.STRING
      },
      db_hostname: {
        type: Sequelize.STRING
      },
      db_table_name: {
        type: Sequelize.STRING
      },
      db_table_user: {
        type: Sequelize.STRING
      },
      db_table_password: {
        type: Sequelize.STRING
      },
      shop_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return servers;
  };
  