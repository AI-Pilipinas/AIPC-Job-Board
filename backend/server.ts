// const express = require("express");
import express from 'express';
const app = express();

//parse
app.use(express.json());

// for login
app.post("/login", (req, res) => {
  console.log("Someone logged in");
});

//register
app.post("/register", (req, res) => {
  console.log("Someone registered");
});

//logout
app.post("/logout", (req, res) => {
  console.log("Someone logoout");
});

//fetch job post
app.get("/fetch-job-post", (req, res) => {});

//create job post
app.post("/create-job-post", (req, res) => {
  console.log("someone created a job post");
});

//fetch user 
app.get("/user-profile", (req, res) => {
  console.log("user profile");
});

export default app;