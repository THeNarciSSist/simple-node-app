"use strict";

import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("app is working on port 5001");
});

app.get("/", (req, res) => {
  res.json("API is working");
});

app.get("/auth", (req, res) => {
  res.json("Auth endpoint");
});

app.get("/reg", (req, res) => {
  res.json("Reg endpoint");
});
