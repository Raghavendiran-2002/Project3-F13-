module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    role: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Admin;
};
