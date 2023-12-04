import express from "express";

const app = express();
const port = 3000;

// Method on app that puts on port is location on our server where we listen to requests from client side
// callback function triggered when our server is setup on port 3000
app.listen(port, () => {

    console.log(`Server is running on ${port}!`);

})

// CTRL C to exit port 

// netstat -ano | findstr "LISTENING" -> find all ports on your PC