# IMDb

## Problem statement:

Are you a movie enthusiast ?! Well, in this milestone you are going to build a replica of worlds most popular and authoritative source for movie, TV and celebrity content called [IMDb](https://www.imdb.com/).

### What is IMDb ?

> IMDb, in full Internet Movie Database, Web site that provides information about millions of films and television programs as well as their cast and crew.

According to wikipedia, as of May 2019, IMDb has approximately 6 million titles (including episodes) and 9.9 million personalities in its database, as well as 83 million registered users.  
IMDb originated with a Usenet posting by British film fan and computer programmer Col Needham entitled "Those Eyes", about actresses with beautiful eyes. Others with similar interests soon responded with additions or different lists of their own.

In 1998, Jeff Bezos, founder, owner, and CEO of Amazon.com, struck a deal with Needham and other principal shareholders to buy IMDb outright for approximately \$55 million and attach it to Amazon as a subsidiary, private company. This gave IMDb the ability to pay the shareholders salaries for their work, while Amazon.com would be able to use IMDb as an advertising resource for selling DVDs and videotapes.

# Paths/EndPoints:

## demo link

!https://imdb-7backend.herokuapp.com

### ``/`` (home public)

- ``GET``  ``/api/test/all`` -  public home page

- ``GET``  ``/api/movies/`` - get movies list

- ``POST``  ``/api/movies/review`` - add  movies review

- ``GET``  ``api/movies/withreview/:id`` - get movies with reviews


### ``/ ``( only logged in admin can access)

- ``GET`` ``/api/test/admin`` - admin home page

- ``POST``  ``/api/movies/`` - add new movies 

- ``PUT``  ``/api/movies/:id`` - update movies 

- ``DElETE``  ``/api/movies/:id`` - delete  movies 

- ``DElETE``  ``/api/movies/`` - delete  all movies 

### ``/`` (auth api)

- ``POST`` ``/api/auth/signup `` - user can signup

- ``POST`` ``/api/auth/signin`` - user can signin 


###  ``/`` (only logged in user can access)

- ``GET``  ``/api/test/user`` - user home page after login

- ``GET``  ``/api/movies/`` - get movies list

- ``POST``  ``/api/movies/review`` - add  movies review

- ``GET``  ``api/movies/withreview/:id`` - get movies  with reviews using movies id






