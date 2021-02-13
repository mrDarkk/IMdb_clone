module.exports = (sequelize, DataTypes) => {
    const review = sequelize.define("review", {
      name: {
        type: DataTypes.STRING
      },
      text: {
        type: DataTypes.STRING
      }
    });
  
    return review;
  };