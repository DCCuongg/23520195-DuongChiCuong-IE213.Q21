// import express để tạo router
const express = require("express");

// tạo router
const router = express.Router();
const MoviesCtrl = require("./movies.controller");
// Định nghĩa route cho đường dẫn gốc "/"
// Khi máy khách truy cập: localhost:5000/api/v1/movies/
router.route("/").get(MoviesCtrl.apiGetMovies);
// định tuyến GET "/" (tương ứng với /api/v1/movies)
// khi client truy cập sẽ trả về "hello world"
router.route("/").get((req, res) => {
  res.send("hello world");
});

// export router để dùng trong server.js
module.exports = router;