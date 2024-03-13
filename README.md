### Group creating

## About my aplication:
This application is a simple manager list for grouping, built using Node.js and Express.js. You can create, update, and delete groups in this application. User interface is very helpful

## Run app step by step:
1. Clone repository:
    git clone https://github.com/00016495/web_CW2.git

2. Navigate project:
    cd  web_CW2

3. Install dependencies by running:
    npm install

4. Start the server:
    npm run start or npm run start:watch for watching environment


5. Go to http://localhost:5001 to access the application on browser.

## Application Dependencies:
The application relies on the following dependencies:
- Express: for building the server application.
- EJS: for rendering content in HTML.
- JOI: validation.
- CORS: to run application in frontend part.

Install these dependencies using the command:
    npm install express ejs cors dotenv joi


## Links:
- [GitHub](https://github.com/00016495/web_CW2.git)
- [Hosted Application](https://web.sharpist.uz/api/main)


## Application Structure Overview
- Configuration
app.config.js: This file extracts the port number specified in the .env file.
- Controllers
controller.js: This module defines various functions to manage HTTP requests related to groups within application.
- MAIN_PAGE: Displays the main page (main.ejs) and retrieves groups from groups.json.
CREATE_GROUP: Manages the creation of new groups, ensuring no duplicates are added to groups.json.
UPDATE_GROUP: Modifies existing groups based on their IDs, updating the information stored in groups.json.
DELETE_GROUP: Removes groups based on their IDs, updating groups.json accordingly.
- Middleware
This directory hosts error handling and validation middleware crucial for maintaining the application's reliability and security.
- Database
groups.json: Contains an array for interacting with data stored in groups.json, handling data persistence and retrieval.
- Public
Stores static files (e.g., CSS, JavaScript) used in EJS views.
- Routing
routes.js: Defines the application's routes, mapping specific controller functions to handle each route.
- Schema
creator.schema.js: Houses Joi schemas for validating group creation requests, leveraging Joi
- Additional Helpers
helpers: Contains helper functions facilitating read and write operations on groups.json.
- User Interface
views: Stores the view template (main.ejs) responsible for rendering the main list interface, serving as the presentation layer of the application.
- Main Root File
main.js: Contains JavaScript code enhancing the functionality of the server as a whole.