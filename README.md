# Full_Stack_Exercise

> Description:
  In this exercise I've used - only on the frontend - a [public API - which contains all the Lord of the Rings books and movies](https://the-one-api.dev/).
  The initial idea is, that a user can see all the books and movies (includes extra infos, such as budget, awards etc), and up on registration, they can add them to their favourites.
  The registration and the add to favourites uses my backend and my database through my frontend.
  Simplest case: you visit the page (content being loaded from public API on hitting 'list...' button), then you hit (e.g) 'list books' button. Then - if you want to add any book to your favourites, you register (`sign up` with username and password) and then you are able to add each. If you change your mind - or made a wrong choice - just simply hit the `remove from favourites` button.


> Because I haven't got sufficient knowledge in AWS, I'm unfortunately unable to deploy the full stack.

---

I've attached an `.sql` file, which contains the settings for the database structure I've used for this exercise.

The exercise basically has 3 layers:

1. Database - written PostgreSQL

2. Backend - NodeJS, Express - use of JWT, CORS, Helmet, BodyParser

3. Frontend - BootstrapVue, Vuex, Vue-router, Axios, Fetch

### Installation process

    > Please Note: the `root` folder contains an `.sql` script file - called: ***synthetix-postgresql***. Before you start the installation process, please [download and install PostgreSQL](https://www.postgresql.org/download/) for the use of this script and to create the database - so for the same  structure which has been   used in this project.

    Whenever you are ready, open the **terminal** in the root of the project folder, then navigate to the **backend** folder:
    >`cd backend`

    Then - to install backend **dependencies** - type:
    >`npm install`

    Then open another **terminal tab** in the project root and navigate to **frontend** folder:
    >`cd frontend`

    Then - to install frontend **dependencies** - type:
    >`npm install`

---

## Usage

Just download it as a .zip or clone it from above.
The database structure has 1 table for `users`, 1 junction table for `favourites` and 1-1 table for `favourite books & movies`.

> _Running back & frontend server, establishing backend connection with database_

- To run **backend server**, go back to the **terminal tab** which has the `'\backend>'` path and type:

  > `nodemon run`

- To establish PostgreSQL **database connection** with back-end, first make sure your `Postgres` database application is up and running, then **either**:

  > create a file - called `.env` in the `backend` folder and add the following:

  ```
  // Postgres DB Connection
  USER= // Your postgres Username // e.g. postgres
  PASSWORD= // Your postgres Password // e.g. postgres
  HOST= // Your host // e.g. localhost
  DATABASE= // Your database name // e.g. synthetix
  SCHEMA= // Your Database Schema name // e.g. public
  PORT= // Your backend port! -> e.g. 3000

  // JWT Secret Key
  SECRET= // Your secret key // e.g. he#59k4p!276ct
  ```

  > **OR**  
  >  edit the file - called `.env-example` from `backend` folder - to your needs, then re-name it to `.env`.

     <br>

  > Then on **successful connection** (_to the database and server_), you must see the following in your **backend terminal tab**:

  ```
  Listening on port 3000
  Executing (default): SELECT 1+1 AS result
  Database connection Live!
  ```

    <br>

- To run **frontend server**, go back to the **terminal tab** which has the `'\frontend>'` path and type:

  > `npm run serve`

  > Then on **successful connection**, you must see the following in your **frontend terminal tab**:

  ```
  DONE  Compiled successfully in 212ms                    13:19:44

  App running at:
  - Local:   http://localhost:8081/
  - Network: http://192.168.0.110:8081/
  ```

<br>

Thank You for visiting and I appreciate every feedback!
