module.exports = (sequelize, DataTypes) => {
    const review = sequelize.define("actor", {
    id: {
        type: Sequelize.INTEGER,
        rimaryKey: true
       },
      name: {
        type: DataTypes.STRING
      }
    });
  
    return review;
  };