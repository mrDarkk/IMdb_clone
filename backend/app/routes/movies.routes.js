module.exports = app => {
    // const movies = require("../controllers/movies.controller");
    const movies = require("../controllers/movies.controller");
  
    var router = require("express").Router();
  
    // Create a new movies
    router.post("/", movies.create);

    router.post("/review", movies.createReview);

    router.get("/review", movies.findAllReview);
  
    // Retrieve all movies
    router.get("/", movies.findAll);

      // Retrieve all published movies
  router.get("/published", movies.findAllPublished);

  // Retrieve a single movies with id
  router.get("/:id", movies.findOne);

  router.get("/withreview/:id", movies.findOneWithReview);

  // Update a movies with id
  router.put("/:id", movies.update);

  // Delete a movies with id
  router.delete("/:id", movies.delete);

  // delete all
  router.delete("/", movies.deleteAll);
  

    
    app.use('/api/movies', router);
  };

