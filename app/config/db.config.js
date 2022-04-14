module.exports = {
  HOST: "127.0.0.1",
  USER: "user",
  PASSWORD: "pass",
  DB: "db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
