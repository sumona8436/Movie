import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const jwtPassword = "FSMovies2023";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/NetflixMovie");
const ALL_MOVIE = mongoose.model(
  "allmovies",
  {
    backdrop: String,
    cast: [String],
    classification: String,
    director: String,
    genres: [String],
    id: String,
    imdb_rating: Number,
    length: String,
    overview: String,
    poster: String,
    released_on: Date,
    slug: String,
    title: String,
  },
  "allmovies"
);

app.get("/getAllData", async function (req, res) {
  console.log("under api");

  const token = req.headers.authorization;
  //console.log(token);
  try {
    // const decoded = jwt.verify(token, jwtPassword);
    // const currentUsername = decoded.username;

    const allData = await ALL_MOVIE.find({});
    console.log(allData);
    res.json({
      movies: allData,
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      msg: "Invalid token",
    });
  }

  //res.send("Hi I'm from backend");
});

app.post("/signin", function (req, res) {
  const username = req.body.email;
  const password = req.body.password;

  //   if (!userExists(username, password)) {
  //     return res.status(403).json({
  //       msg: "User doesnt exist in our in memory db",
  //     });
  //   }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
