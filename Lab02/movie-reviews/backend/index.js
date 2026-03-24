// import thư viện dotenv để đọc biến môi trường từ file .env
require("dotenv").config();

// import MongoDB client
const { MongoClient } = require("mongodb");

// import app từ server.js
const app = require("./server");
// --- Import MoviesDAO ---
const MoviesDAO = require("./dao/moviesDao");
// lấy PORT và MONGODB_URI từ biến môi trường
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// tạo client kết nối MongoDB
const client = new MongoClient(MONGODB_URI);

async function startServer() {
  try {
    // kết nối tới MongoDB
    await client.connect();
    console.log("Connected to MongoDB");
    // --- Gọi injectDB trước khi chạy server ---
    // Chúng ta truyền đối tượng client vừa kết nối vào để DAO lấy database
    await MoviesDAO.injectDB(client);
    console.log("MoviesDAO initialized");
    // chạy server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1); // dừng chương trình nếu lỗi
  }
}

// gọi hàm để chạy server
startServer();