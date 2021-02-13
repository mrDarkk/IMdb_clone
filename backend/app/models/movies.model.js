module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("movies", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Movies;
  };