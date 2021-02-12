module.exports = app => {
    // const movies = require("../controllers/movies.controller");
    const movies = require("../controllers/movies.controller");
  
    var router = require("express").Router();
  
    // Create a new movies
    router.post("/", movies.create);
  
    // Retrieve all movies
    router.get("/", movies.findAll);
  

    
    app.use('/api/movies', router);
  };

