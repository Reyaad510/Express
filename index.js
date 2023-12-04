import express from "express";

const app = express();
const port = 3000;


// nodemon index.js
// nodemon allows server to refresh without having to CTRL C everytime to test new changes
// npm i -g nodemon -> -g made it global to use on any other project not just this one

// when load "localhost3000" will respond with what's below
app.get("/", (req, res) => {

    // rawHeaders gives key:value pairs in console log when refresh localhost3000
    // console.log(req.rawHeaders);

     // res.send("Hello World!");

     res.send("<h1>Hello World!</h1>");

})

app.get("/about", (req, res) => {

    res.send("<h1>About Me </h1>");

})


// Method on app that puts on port is location on our server where we listen to requests from client side
// callback function triggered when our server is setup on port 3000
app.listen(port, () => {

    console.log(`Server is running on ${port}!`);

})

// CTRL C to exit port 

// netstat -ano | findstr "LISTENING" -> find all ports on your PC