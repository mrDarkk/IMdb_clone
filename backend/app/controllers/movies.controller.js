const db = require("../models");
const Movies = db.movies;
const Review = db.review;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const movies = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Tutorial in the database
    Movies.create(movies)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movies."
        });
      });
  };



  // exports.createReview = (req, review) => {
  //   return Review.create({
  //     name: review.name,
  //     text: review.text,
  //     moviesId: req.params.id,
  //   })
  //     .then((review) => {
  //       console.log(">> Created review: " + JSON.stringify(review, null, 4));
  //       return review;
  //     })
  //     .catch((err) => {
  //       console.log(">> Error while creating review: ", err);
  //     });
  // };

  exports.createReview = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "name can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const review = {
      movieId: req.body.movieId,
      name: req.body.name,
      text: req.body.text,
    };
  
    // Save Tutorial in the database
    Review.create(review)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movies."
        });
      });
  };


  // Get all Movies include comments
exports.findAllReview = () => {
  return Movies.findAll({
    include: ["review"],
  }).then((movies) => {
    return movies;
  });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Movies.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Movies."
        });
      });
  };


  // Find a single Movies with an id
exports.findOneWithReview = (req, res) => {
  const id = req.params.id;

  Movies.findByPk(id, { include: ["review"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Movies with id=" + id
      });
    });
};

// Find a single Movies with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Movies.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Movies with id=" + id
      });
    });
};

// Update a Movies by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Movies.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movies was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Movies with id=${id}. Maybe Movies was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Movies with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Movies.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movies was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Movies with id=${id}. Maybe Movies was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Movies.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Movies were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Movies."
      });
    });
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};