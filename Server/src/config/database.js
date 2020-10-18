module.exports = {
  development: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'developer',
    password: '',
    database: 'guessthenumber',
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};