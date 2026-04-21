// import express để tạo router
const express = require("express");

// tạo router
const router = express.Router();

// Import các Controller
const MoviesCtrl = require("./movies.controller");
const ReviewsCtrl = require("./reviews.controller");

// --- CÁC ĐỊNH TUYẾN PHIM (MOVIES) ---
router.route("/").get(MoviesCtrl.apiGetMovies);

// Lấy danh sách tất cả Ratings
router.route("/ratings").get(MoviesCtrl.apiGetRatings);

// Lấy chi tiết phim theo ID
router.route("/id/:id").get(MoviesCtrl.apiGetMovieById);


// ==========================================
// BÀI TẬP 1: Thiết lập định tuyến cho Review
// ==========================================

// Định tuyến cho đường dẫn /review
router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)   // Thêm mới
  .put(ReviewsCtrl.apiUpdateReview)    // Cập nhật
  .delete(ReviewsCtrl.apiDeleteReview); // Xóa

// Nếu bạn muốn lấy reviews (GET) theo ID phim hoặc theo review, 
// hãy đảm bảo ReviewsCtrl có hàm apiGetReviews
router.route("/review").get(ReviewsCtrl.apiGetReviews);

// export router để dùng trong server.js
module.exports = router;