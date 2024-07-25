// import express from "express";
const express = require("express");
// import path from "path";
const path = require("path");
// import cors from "cors";
const cors = require("cors");
const pool = require("./db");

const port = process.env.PORT || 8000;
const app = express();

// body parser middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.listen(port, () => {
  console.log(`server is running on Port:${port}`);
});
