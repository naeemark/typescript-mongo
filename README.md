# typescript-mongo
A sample app using `Typescript` and `Mongodb` for `RESTful` api

### Pre-reqs
- nodejs `npm`
- [Docker](https://www.docker.com/)
- [Docker Container for `mongodb`](https://hub.docker.com/_/mongo/)


#### Functionality
- A `RESTful CRUD` with response format `JSON`
- Provides functionality for `Book` model
- **Calls**
    - **GET** - /books # returns all books
    - **GET** - /book/{1} # returns a book with id 1
    - **POST** - /book # inserts a new book into the table
    - **DELETE** - /book/{1} # deletes a book with id of 1
    - **PUT** - /book/{1} # updates a book with id of 1

#### Dependencies
- See [`package.json`](/package.json)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Typescript](https://www.npmjs.com/package/typescript-rest#service-context)

### Run the Project
#### Prepare Mongodb on localhost
- `docker pull mongo`
- `docker run --name my_mongo -d -p 127.0.0.1:27017:27017 mongo`
- You cal check the `db-connection` by [MongoDb local client](https://robomongo.org/)

#### Start App
- `npm run watch`
- You may access the app on [`http://localhost:3000`](http://localhost:3000)


### Build Docker Image
- `docker build -t node-docker .` 

### Run Docker Image
- Run `docker run -d -p 9000:3000 node-docker`
- Run with auto-sync changes `docker run -d -p 9001:3000 -v $(pwd):/app node-docker`
- You may access the running docker app on [`http://localhost:9001`](http://localhost:9001)


### Reference:
- [typescript-mongodb](https://tutorialedge.net/typescript/typescript-mongodb-beginners-tutorial/)
- [Sample Books Data](https://gist.github.com/nanotaboada/6396437)
- [MongoDb local client](https://robomongo.org/)