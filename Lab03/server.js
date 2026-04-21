// import các thư viện cần thiết
const express = require("express");
const cors = require("cors");
const movies = require("./api/movies.route");

// khởi tạo app
const app = express();

// middleware:
// - cors(): cho phép frontend gọi API
// - express.json(): đọc dữ liệu JSON từ request
app.use(cors());
app.use(express.json());

// routing:
// tất cả request tới /api/v1/movies sẽ được chuyển sang movies.route.js
app.use("/api/v1/movies", movies);

// xử lý lỗi 404:
// nếu không khớp route nào ở trên thì trả về not found
app.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

// export app để dùng ở index.js
module.exports = app;