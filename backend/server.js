const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 404; // 404 for toubleshooting

//parse
app.use(express.json());

// for login
app.post("/login", (res, req) => {
  console.log("Someone logged in");
});

//register
app.post("/register", (res, req) => {
  console.log("Someone registered");
});

//logout
app.post("/logout", (res, req) => {
  console.log("Someone logoout");
});

//fetch job post
app.get("/fetch-job-post", (req, req) => {});

//create job post
app.post("/create-job-post", (req, res) => {
  console.log("someone created a job post");
});

//fetch user 
app.get("/user-profile", (res, req) => {
  console.log("user profile");
});

//port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});