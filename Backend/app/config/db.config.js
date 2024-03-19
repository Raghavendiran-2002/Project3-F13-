module.exports = {
  HOST: "192.168.1.200",
  USER: "root",
  PASSWORD: "root",
  DB: "testDB",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
