// import thư viện dotenv để đọc biến môi trường từ file .env
require("dotenv").config();

// import MongoDB client
const { MongoClient } = require("mongodb");

// import app từ server.js
const app = require("./server");

// --- Import các DAO ---
const MoviesDAO = require("./dao/moviesDao");
// BÀI TẬP: Import ReviewsDAO để quản lý bình luận
const ReviewsDAO = require("./dao/reviewsDao");

// lấy PORT và MONGODB_URI từ biến môi trường
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// tạo client kết nối MongoDB
const client = new MongoClient(MONGODB_URI);

async function startServer() {
  try {
    // 1. Kết nối tới MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // 2. --- Khởi tạo (Inject) các DAO trước khi chạy server ---
    // Truyền đối tượng client vào để DAO lấy database và collection tương ứng

    // Khởi tạo MoviesDAO
    await MoviesDAO.injectDB(client);
    console.log("MoviesDAO initialized");

    // BÀI TẬP: Khởi tạo ReviewsDAO
    await ReviewsDAO.injectDB(client);
    console.log("ReviewsDAO initialized");

    // 3. Chạy server sau khi các kết nối DB đã sẵn sàng
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // dừng chương trình nếu lỗi kết nối
  }
}

// gọi hàm để chạy server
startServer();