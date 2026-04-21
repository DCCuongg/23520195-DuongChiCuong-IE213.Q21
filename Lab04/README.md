# Lab04

[Chi tiết Lab04](Lab04/README.md)

EM gói riêng 1 file README.md ở LAB04 để sai có cập nhận README tổng vẩn còn minh chứng là không chỉnh sửa lab củ. Nội Dung ở bản tổng và bản riêng LAb hoàn toàn giống nhau.
# 1. Mục tiêu
Yêu cầu

Trước khi làm bài tập này, sinh viên cần xem lại nội dung bài học Chương 3
– Phần thiết lập Frontend với Reactjs.

Mục tiêu

- Giúp sinh viên hiểu được cách thiết lập frontend trong MERN stack với
Reactjs.
- Giới thiệu một số package chủ yếu trong việc xây dựng mã nguồn fe.
- Thực hành xây dựng thanh Navigation Header bar với sự hỗ trợ của
bootstrap, cách chia các component trong dự án
## 2. Công cụ và Môi trường phát triển

Phần này mô tả các công cụ, thư viện và thiết lập môi trường đã được sử dụng để xây dựng Frontend cho dự án Movie Review.

### 2.1. Môi trường hệ thống
* **Node.js**: Phiên bản LTS (đã cài đặt để quản lý các gói thư viện).
* **NPM (Node Package Manager)**: Sử dụng để cài đặt và quản lý các phụ thuộc (dependencies).
* **Hệ điều hành**: Windows (sử dụng Terminal `MINGW64/Git Bash`).

### 2.2. Công cụ lập trình
* **Trình soạn thảo**: Visual Studio Code (VS Code).
* **Tiện ích hỗ trợ**:
    * *ES7+ React/Redux/React-Native snippets*: Hỗ trợ tạo nhanh cấu trúc Component.
    * *Prettier*: Định dạng mã nguồn chuẩn hóa.
* **Trình duyệt**: Google Chrome / Microsoft Edge cùng với **React Developer Tools** để debug.

### 2.3. Các thư viện chính đã cài đặt (Frontend)
Dự án đã sử dụng các package sau để xây dựng giao diện và điều hướng:

| Thư viện | Phiên bản | Công dụng |
| :--- | :--- | :--- |
| **React** | ^18.x | Thư viện chính xây dựng giao diện người dùng. |
| **Bootstrap** | ^5.x | Cung cấp CSS framework để xây dựng UI nhanh chóng. |
| **React-Bootstrap** | ^2.x | Các Component Bootstrap được tối ưu hóa cho React (Navbar, Container, Nav). |
| **React-Router-Dom** | ^6.x | Thư viện xử lý định tuyến (Routing), giúp chuyển trang mà không tải lại. |

### 2.4. Lệnh thiết lập môi trường đã thực hiện
Để thiết lập dự án từ đầu, các câu lệnh sau đã được thực thi thành công:

```bash
# 1. Khởi tạo template React
npx create-react-app frontend

# 2. Di chuyển vào thư mục frontend
cd frontend

# 3. Cài đặt các thư viện bổ trợ
npm install bootstrap react-bootstrap react-router-dom

# 4. Khởi chạy ứng dụng ở chế độ phát triển
npm start
```
---
## 3. Cách chạy
### Bài 1: Thiết lập nơi làm việc với frontend của dự án.

#### 1.1 Tạo template frontend với React
* Tạo template frontend với **React** trong thư mục **Movie Review** (ứng dụng minh họa).
* Chạy ứng dụng lên với câu lệnh `npm start` để thấy được kết quả (lưu ý `cd` vào thư mục `frontend` trước khi chạy).
Thực hiện các lệnh sau để khởi tạo dự án:
```bash
# Di chuyển vào thư mục gốc
cd "Movie Review"

# Tạo ứng dụng React tên là frontend
npx create-react-app frontend

# Truy cập và chạy thử ứng dụng
cd frontend
npm start
```
![add-review](./images/1.png)
#### 1.2 Cài đặt các package hỗ trợ xây dựng dự án
Cài đặt các thư viện bổ trợ sau:
* **Bootstrap**: Hỗ trợ xây dựng giao diện người dùng (UI).
* **React router dom**: Hỗ trợ cơ chế định tuyến (Routing).

Cài đặt các thư viện cần thiết cho UI và định tuyến:
```
npm install bootstrap react-bootstrap react-router-dom
```
về sau Cấu hình: Thêm dòng sau vào đầu file src/index.js để kích hoạt CSS Bootstrap:
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
![add-review](./images/2.png)
---

### Bài 2: Xây dựng Navigation Header bar cho ứng dụng.

#### 2.1 Xây dựng các component cơ sở
Xây dựng các component để định tuyến nội dung ứng dụng (tạo trong thư mục `components` bên trong `frontend` và import vào `App.js`):
* **movies-list**: Hiển thị thông tin danh sách phim.
* **movie**: Hiển thị phim với các review.
* **add-review**: Hỗ trợ thêm review cho khách.
* **login**: Trang đăng nhập cho khách.
Để dễ dàng quản lý mã nguồn và các tệp CSS riêng biệt cho từng thành phần, mỗi component sẽ được đặt trong một thư mục riêng tại `src/components/`.

**Cấu trúc thư mục mong muốn em sẽ làm:**
```text
src/
└── components/
    ├── MoviesList/
    │   ├── MoviesList.js
    │   └── MoviesList.css
    ├── Movie/
    │   ├── Movie.js
    │   └── Movie.css
    ├── AddReview/
    │   ├── AddReview.js
    │   └── AddReview.css
    └── Login/
        ├── Login.js
        └── Login.css
```
![add-review](./images/2.1.1.png)
thực hiện viết tam cấu trúc của MoviesList.js củng như tương tự với các hàm khác. Để triển khai thanh nav mà không lỗi.
```js
import React from 'react';
import './MoviesList.css';

function MoviesList() {
  return (
    <div className="movies-list-container">
      <h2>Movies List</h2>
    </div>
  );
}

export default MoviesList;
``` 
#### 2.2 Tích hợp Navbar
* Lấy **Navbar Component** từ thư viện **React-Bootstrap**.
* Đưa vào phần mã nguồn JSX của hàm `App()` trong tệp tin `App.js`.
đầu tiên bọc BrowserRouter cho file index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Thêm dòng này
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Bọc App bằng BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
```
sau đó triển khai vào app.js nhưu 2.3
#### 2.3 Điều chỉnh thông tin hiển thị
* Thay đổi tên logo thành: **Movie Reviews**.
* Liên kết thứ nhất: Thay **Home** thành **Movies**.
* Liên kết thứ hai: Thay **Link** thành trạng thái **Login/Logout** của người dùng.
* **Lưu ý**: Sử dụng React hook `useState` để lưu giữ và thay đổi trạng thái đăng nhập của người dùng. Ví dụ: `const [user, setUser] = useState(null);`.

Logo: Sử dụng <Navbar.Brand> với nội dung Movie Reviews.

Menu:

Liên kết Movies: Điều hướng người dùng về danh sách phim.

Trạng thái Login/Logout: Sử dụng Hook useState để quản lý.

Mã nguồn thực hiện:
```js
// Sử dụng useState để lưu giữ trạng thái đăng nhập
const [user, setUser] = useState(null);

// Hàm giả lập đăng nhập và đăng xuất
async function login(user = null) { setUser(user); }
async function logout() { setUser(null); }

// JSX cho Navbar
<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Movie Reviews</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
        {user ? (
          <Nav.Link onClick={logout} style={{ cursor: 'pointer' }}>
            Logout ({user.name})
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
```
---

### Bài 3: Thiết lập các định tuyến cho các component.

#### 3.1 Cấu hình bộ định tuyến
Trong tệp tin `App.js`, sử dụng thẻ `<Switch>` hoặc `<Routes>` (import từ `react-router-dom`) để định tuyến cho 4 component đã tạo ở bài 2.1.
Sử dụng thẻ <Routes> từ thư viện react-router-dom (phiên bản v6) để bao bọc các tuyến đường trong ứng dụng, đảm bảo tính điều hướng Single Page Application (SPA). 

#### 3.2 Các định tuyến chi tiết
Thiết lập các đường dẫn cụ thể như sau:
* **“/”**: Đến component `MoviesList`.
* **“/movies/:id/review”**: Đến component `AddReview`.
* **“/movies/:id”**: Đến component `Movie`.
* **“/login”**: Đến component `Login`.

Dưới đây là chi tiết các tuyến đường (routes) được thiết lập trong ứng dụng để điều hướng giữa các thành phần giao diện:

| Đường dẫn (Path) | Thành phần (Component) | Ghi chú |
| :--- | :--- | :--- |
| `/` | `MoviesList` | Trang mặc định hiển thị danh sách phim khi vừa truy cập. |
| `/movies` | `MoviesList` | Trang hiển thị danh sách toàn bộ phim. |
| `/movies/:id` | `Movie` | Xem chi tiết thông tin phim và các đánh giá dựa trên `ID`. |
| `/movies/:id/review` | `AddReview` | Giao diện cho phép người dùng thêm đánh giá mới cho phim. |
| `/login` | `Login` | Trang đăng nhập vào hệ thống để thực hiện các chức năng đánh giá. |

Mã nguồn triển khai chi tiết (App.js):

```js
<Container className="mt-3">
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:id" element={<Movie user={user} />} />
          <Route path="/movies/:id/review" element={<AddReview user={user} />} />
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </Container>
```
## 4. Kết quả đầu ra
hiển thị thành công trang chủ và thánh nav
![add-review](./images/4.1.png)

hiển thị thành công trang movies và điều hướng hoạt động tốt
![add-review](./images/4.2.png)

hiển thị thành công trang login và điều hướng hoạt động tốt
![add-review](./images/4.3.png)

hiển thị thành công trang movies detail và điều hướng hoạt động tốt
![add-review](./images/4.4.png)

hiển thị thành công trang movies review và điều hướng hoạt động tốt
![add-review](./images/4.5.png)
## 5. Giải thích chính
trình bày ở cách làm 3. không có giải thích đặc biệt khác.