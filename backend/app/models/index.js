const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.movies = require("../models/movies.model.js")(sequelize, Sequelize);
db.review = require("../models/review.model.js")(sequelize, Sequelize);
db.actor = require("../models/actor.model.js")(sequelize, Sequelize);

db.movies.hasMany(db.review, { as: "review" });
db.review.belongsTo(db.movies, {
  foreignKey: "movieId",
  as: "movies",
});

db.movies.belongsToMany(db.actor, {
  through: "movie_actor",
  as: "actor",
  foreignKey: "movie_id",
});

db.actor.belongsToMany(db.movies, {
  through: "movie_actor",
  as: "movies",
  foreignKey: "actor_id",
});

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
