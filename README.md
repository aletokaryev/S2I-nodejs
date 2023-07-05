## README - Project NODEJS - S2I
### Installation

To install and run the project locally, follow the steps below:

1. Make sure you have Node.js and MongoDB installed on your system.

2. Clone this repository to your computer:

   ```
   git clone https://github.com/aletokaryev/S2I-nodejs
   ```

3. Navigate to the project directory

4. Install the dependencies:

   ```
   npm install
   ```

5. Database configuration:

   - Create a MongoDB account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new cluster and obtain the database connection string.
   - Paste the connection string into the `server.js` file in the database configuration section.

6. Start the server:

   ```
   npm start
   ```

7. The server will be running at `http://localhost:3000`.

### API Endpoints

Below are the available API endpoints in the project:

#### Courses

- **GET /api/v1/courses**: Get all courses from the database.
- **GET /api/v1/courses/:id**: Get all course details from the database. 
- **POST /api/v1/courses**: Add a new course to the database.
- **PUT /api/v1/courses/:id**: Update an existing course in the database.
- **DELETE /api/v1/courses/:id**: Delete a course from the database.

#### Typologies

- **GET /api/v1/typologies**: Get all typologies from the database.
- **POST /api/v1/typologies**: Add a new typology to the database.
- **PUT /api/v1/typologies/:id**: Update an existing typology in the database.
- **DELETE /api/v1/typologies/:id**: Delete a typology from the database.

#### Universities

- **GET /api/v1/universities**: Get all universities from the database.
- **GET /api/v1/universities/:id**: Get all university details from the database.
- **POST /api/v1/universities**: Add a new university to the database.
- **PUT /api/v1/universities/:id**: Update an existing university in the database.
- **DELETE /api/v1/universities/:id**: Delete a university from the database.


## Connecting Node.js Project to MongoDB Database
### Prerequisites

Before you begin, make sure you have the following:

1. Node.js installed on your machine.
2. MongoDB Atlas account or a locally installed MongoDB server.

### Steps

1. Clone the repository to your local machine.

2. Navigate to the project's root directory.

3. Install the project dependencies by running the following command:

   ```
   npm install
   ```

4. Edit the `.env.example` and call it `.env`. This file will contain your environment variables.

5. Open the `.env` file and edit the following line:

   ```
   DB_CONNECTION_STRING=
   ```

   Replace the empty value after the `=` sign with your MongoDB connection string. If you're using MongoDB Atlas, you can find the connection string in the MongoDB Atlas dashboard. If you're using a locally installed MongoDB server, use the appropriate connection string.

6. Save the `.env` file.

7. Start the Node.js application by running the following command:

   ```
   npm start
   ```

   This command will start the application and establish a connection to the MongoDB database using the connection string you provided.

   You should see a message in the console indicating that the application is connected to the database.

Congratulations! Your Node.js project is now connected to the MongoDB database. You can start building your application and interacting with the database using the MongoDB driver or an Object-Document Mapper (ODM) such as Mongoose.

Please note that the `.env` file containing sensitive information like the database connection string should never be committed to version control. Make sure to add it to your `.gitignore` file to prevent accidental exposure of sensitive data.

For more information on how to interact with MongoDB using Node.js, refer to the MongoDB Node.js driver or Mongoose documentation.
