//will config the api

const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res
    .status(200)
    .json({ jargonOfTheDay: process.env.JOTD, Reed: process.env.REED });
});

module.exports = server;
