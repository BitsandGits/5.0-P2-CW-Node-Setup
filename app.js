// bring in our packages used in entry point file. bring Express into the project to create an Express server 
const express = require("express");

// create an instance of the Express object and attach it to a variable app so that it is usable in the entry point file 
const app = express();

// define a port variable 
const PORT = 3000;

// have Express listen for requests at the port and if the port is open, the server will console log a message
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// use GET method to listen to the "/" path (aka a route). At the "/" path we will send a Hello world to the client 
app.get("/", (request, response) => {
    response.send("Hello world!");
});

// run node app.js in terminal 
// open up http://localhost:3000/ 
// ctrl + C to stop the server 


// creating a .gitignore file
// terminal: touch .gitignore