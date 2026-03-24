# Lab01
[Chi tiết Lab02](Lab02/README.md)

EM gói riêng 1 file README.md ở LAB02 để sai có cập nhận README tổng vẩn còn minh chứng là không chỉnh sửa lab củ. Nội Dung ở bản tổng và bản riêng LAb hoàn toàn giống nhau.
# 1. Mục tiêu
- Thiết lập môi trường.
- Thực hành tạo các tệp tin server.js, index.js, api/movies.route.js.
# 2. Công cụ / môi trường

Các công cụ và môi trường được sử dụng trong bài thực hành:

- **MongoDB Atlas**  
  Dịch vụ cơ sở dữ liệu MongoDB trên nền tảng đám mây, dùng để tạo và quản lý cluster database.

- **MongoDB Compass**  
  Công cụ giao diện (GUI) giúp kết nối và quản lý MongoDB database trên máy tính.

- **Mongo Shell / MONGOSH**  
  Công cụ dòng lệnh dùng để thực thi các lệnh MongoDB như tạo database, thêm document, truy vấn dữ liệu.

- **Trình duyệt web (Google Chrome / Microsoft Edge / Firefox)**  
  Dùng để truy cập và quản lý MongoDB Atlas trên nền tảng web.

- **Máy tính cá nhân có kết nối Internet**  
  Dùng để cài đặt MongoDB Compass và kết nối tới MongoDB Atlas.

# 3. Cách làm và Giải thích chính
## 🚀 Bài 1: Thiết lập môi trường

### 🔹 1.1 Tải và cài đặt Node.js
- Truy cập trang chủ: https://nodejs.org  
![Alt text](/Lab02/images/1.1-1.png)
- Tải và cài đặt phiên bản phù hợp với hệ điều hành  
- Kiểm tra cài đặt:
```bash
node -v
```
![Alt text](/Lab02/images/1.1-2.png)
---

### 🔹 1.2 Cài đặt công cụ soạn thảo
Cài đặt một trong các công cụ:
- Visual Studio Code (máy em đã cài vs code) 
![Alt text](/Lab02/images/1.2-1.png)
- Sublime Text  
- Notepad++  

---

### 🔹 1.3 Khởi tạo cấu trúc thư mục
Tạo thư mục dự án, ví dụ:
```bash
movie-reviews/
└── backend/
```

```bash
cd Lab02
mkdir movie-reviews
cd movie-reviews
mkdir backend
cd backend
```
![Alt text](/Lab02/images/1.3-1.png)
---

### 🔹 1.4 Khởi tạo project Node.js
Di chuyển vào thư mục `backend` và chạy:
```bash
npm init
```
![Alt text](/Lab02/images/1.4-1.png)
---

### 🔹 1.5 Cài đặt dependencies
Cài đặt các thư viện cần thiết:
```bash
npm install mongodb express cors dotenv
```
![Alt text](/Lab02/images/1.5-1.png)
---

### 🔹 1.6 Cài đặt Nodemon
Cài đặt nodemon để tự động reload server:
```bash
npm install --save-dev nodemon
```
![Alt text](/Lab02/images/1.6-1.png)
Sử dụng:
```bash
npx nodemon index.js
```

---
# Hướng dẫn Bài 2: Thiết lập cấu trúc Backend

Tài liệu này hướng dẫn các bước khởi tạo máy chủ, quản lý biến môi trường và thiết lập định tuyến cơ bản cho ứng dụng Movie Reviews.

---

## 2.1 Khởi tạo máy chủ (`backend/server.js`)
Tệp `server.js` đóng vai trò là nơi khởi tạo máy chủ web chính.
* **Dependencies:** Yêu cầu cài đặt và import `express`, `cors`.
* **Middleware:** Sử dụng các phương thức của `express` và `cors` để xử lý dữ liệu và quyền truy cập.
* **Routing:** * Thiết lập định tuyến chính dẫn tới `/api/v1/movies` (chi tiết tại mục 2.4).
    * Xử lý lỗi **404** (Not Found) cho các yêu cầu truy cập vào các đường dẫn không tồn tại.
```js
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
```
## 2.2 Quản lý biến môi trường (`backend/.env`)
Tạo tệp `.env` để lưu trữ các thông tin cấu hình nhạy cảm và linh hoạt:
* **MONGODB_URI:** Đường dẫn (URI) kết nối tới cơ sở dữ liệu trên MongoDB Atlas.
* **PORT:** Cổng dịch vụ web chạy (ví dụ: `3000`).

.gitignore
```
.env
node_modules/
```
.env
```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```
![Alt text](/Lab02/images/2.2-1.png)
## 2.3 Quản lý kết nối và thực thi (`backend/index.js`)
Tệp `index.js` là điểm đầu vào của ứng dụng, chịu trách nhiệm:
* Quản lý việc kết nối tới cơ sở dữ liệu.
* Khởi tạo các đối tượng cần thiết.
* Kích hoạt máy chủ (Run server) để bắt đầu lắng nghe các yêu cầu.
```js
// import thư viện dotenv để đọc biến môi trường từ file .env
require("dotenv").config();

// import MongoDB client
const { MongoClient } = require("mongodb");

// import app từ server.js
const app = require("./server");

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
```
## 2.4 Định tuyến ứng dụng (`backend/api/movies.route.js`)
Tạo thư mục `api` và tệp `movies.route.js` để xử lý các logic định tuyến liên quan đến movies:
* **Nội dung:** Hiện tại thiết lập một định tuyến duy nhất là `/`.
* **Kết quả:** Trả về thông báo `'hello world'` cho phía máy khách.

> **Ví dụ:** Khi máy khách truy cập vào địa chỉ `localhost:3000/api/v1/movies`, hệ thống sẽ trả về chuỗi văn bản: `hello world`.
```js
// import express để tạo router
const express = require("express");

// tạo router
const router = express.Router();

// định tuyến GET "/" (tương ứng với /api/v1/movies)
// khi client truy cập sẽ trả về "hello world"
router.route("/").get((req, res) => {
  res.send("hello world");
});

// export router để dùng trong server.js
module.exports = router;
```
## 2.5 Truy xuất dữ liệu với DAO (`backend/dao/moviesDAO.js`)
- Tạo thư mục dao trong thư mục backend, tạo tệp tin moviesDAO.js trong thư mục này.
- Tệp tin moviesDAO.js hiện tại sẽ bao gồm class MoviesDAO chứa 2 phương thức chính là:
- injectDBO: dùng để tham chiếu tới dữ liệu collection movies trên sample_mflix.
- getMovies(): để trả về danh sách các movies và số lượng các movies trả về thông qua
2 tham số: moviesList và totalNumMovies, với bộ lọc mặc định là: không có bộ lọc, bắt đầu từ
trang 0, và mỗi trang có 20 phim là tối đa.

```js
// import MongoDB
const { ObjectId } = require("mongodb");

// biến lưu collection movies
let movies;

// class xử lý truy xuất dữ liệu (DAO)
class MoviesDAO {
  // injectDB:
  // dùng để kết nối tới collection "movies" trong database
  static async injectDB(conn) {
    if (movies) {
      return;
    }
    try {
      movies = await conn.db("sample_mflix").collection("movies");
    } catch (e) {
      console.error(`Unable to establish collection handles: ${e}`);
    }
  }

  // getMovies:
  // lấy danh sách movies và tổng số lượng
  static async getMovies({
    filters = null,
    page = 0,
    moviesPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("title" in filters) {
        // Tìm kiếm văn bản dựa trên tiêu đề
        query = { $text: { $search: filters["title"] } };
      } else if ("rated" in filters) {
        // Tìm kiếm chính xác theo độ tuổi (G, PG, R...)
        query = { "rated": { $eq: filters["rated"] } };
      }
    }

    let cursor;
    
    try {
      // Tìm kiếm với query, sau đó giới hạn số lượng và bỏ qua các trang trước đó
      cursor = await movies
        .find(query)
        .limit(moviesPerPage)
        .skip(moviesPerPage * page);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { moviesList: [], totalNumMovies: 0 };
    }

    try {
      const moviesList = await cursor.toArray();
      const totalNumMovies = await movies.countDocuments(query);

      return { moviesList, totalNumMovies };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { moviesList: [], totalNumMovies: 0 };
    }
  }
}

// export class để dùng ở controller hoặc route
module.exports = MoviesDAO;
```
- Khởi tạo đối tượng của lớp MoviesDAO trong tệp tin index.js để sử dụng phương thức
injectDBO. Phương thức này sẽ được gọi sau khi kết nối tới cơ sở dữ liệu trên MongoAtlas
Cloud và trước khi máy chủ được chạy.
injectDBO
```js
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
```
## 2.6 Thiết lập CONTROLLER cho ứng dụng web (backend/api/movies.controller.js)
Controller đóng vai trò là "người điều phối". Nó tiếp nhận yêu cầu (request) từ client, trích xuất các tham số từ URL, gọi đến DAO để lấy dữ liệu và cuối cùng trả kết quả về cho client dưới dạng JSON.

1. Cấu trúc thư mục
Bạn hãy tạo tệp tin tại đường dẫn sau: backend/api/movies.controller.js.

2. Mã nguồn chi tiết
Trong file này, chúng ta sẽ định nghĩa class MoviesController với phương thức apiGetMovies.
```js
// Thay vì dùng import, ta dùng require
const MoviesDAO = require("../dao/moviesDAO");

class MoviesController {
  static async apiGetMovies(req, res, next) {
    // 1. Xác định số lượng phim mỗi trang (mặc định là 20)
    // Dữ liệu từ query string luôn là chuỗi, nên cần ép kiểu số (int)
    const moviesPerPage = req.query.moviesPerPage
      ? parseInt(req.query.moviesPerPage, 10)
      : 20;

    // 2. Xác định số trang hiện tại (mặc định là trang 0)
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    // 3. Khởi tạo bộ lọc (filters) dựa trên tham số truyền vào từ URL
    let filters = {};
    if (req.query.rated) {
      filters.rated = req.query.rated;
    } else if (req.query.title) {
      filters.title = req.query.title;
    }

    // 4. Gọi phương thức getMovies từ MoviesDAO với các tham số đã xử lý
    const { moviesList, totalNumMovies } = await MoviesDAO.getMovies({
      filters,
      page,
      moviesPerPage,
    });

    // 5. Cấu trúc đối tượng phản hồi để trả về cho Client
    let response = {
      movies: moviesList,
      page: page,
      filters: filters,
      entries_per_page: moviesPerPage,
      total_results: totalNumMovies,
    };

    // Gửi kết quả dưới dạng JSON
    res.json(response);
  }
}

// Xuất class theo kiểu CommonJS để các file khác có thể require
module.exports = MoviesController;
```
## 2.7 Đưa Controller vào định tuyến (api/movies.route.js)
Sau khi đã có DAO để lấy dữ liệu và Controller để điều phối, bước cuối cùng là tạo một Route (định tuyến) để liên kết URL từ trình duyệt với logic xử lý trong code.

1. Cấu trúc thư mục
Tệp tin này thường nằm cùng thư mục với controller: backend/api/movies.route.js.

2. Mã nguồn chi tiết
```js
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
```
Kết quả ở phần tổng kết.
# 4 Tổng kết
- Đã cài đặt Node.js  
- Đã tạo project Node.js  
- Đã cài các thư viện cần thiết  
- Đã thiết lập môi trường phát triển với nodemon  
## Chạy và kiểm tra ứng dụng

### Bước 1: Cài đặt thư viện
```bash
npm install
```

---

### Bước 2: Chạy server
```bash
node index.js
```
hoặc dùng nodemon:
```bash
npx nodemon index.js
```

---

### Bước 3: Kiểm tra trên trình duyệt
Mở trình duyệt và truy cập:

```
http://localhost:3000/api/v1/movies
```

---

### Kết quả mong đợi
Nếu hệ thống hoạt động đúng, bạn sẽ nhận được:

```
hello world
```
![Alt text](/Lab02/images/4-1.png)

### Chạy api http://localhost:3000/api/v1/movies

Lên trinh duyệt chạy http://localhost:3000/api/v1/movies
![Alt text](/Lab02/images/4-2.png)

Chạy thử trên postman
![Alt text](/Lab02/images/4-3.png)
