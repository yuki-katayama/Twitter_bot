const functions = require("firebase-functions");
const Twitter = require("twitter");
const myfunc = require("./index");

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
myfunc.favTweets(client, "#神戸プロアカ", 10);
