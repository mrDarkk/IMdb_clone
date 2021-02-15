module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("movies", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      img: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.STRING
      }
    });
  
    return Movies;
  };