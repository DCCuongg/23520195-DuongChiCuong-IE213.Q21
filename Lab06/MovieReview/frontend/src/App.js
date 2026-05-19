import React, { useState } from 'react';
// 1. Thêm Routes và Route vào phần import
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Đảm bảo đã import css của bootstrap

import MoviesList from './components/MoviesList/MoviesList';
import Movie from './components/Movie/Movie';
import AddReview from './components/AddReview/AddReview';
import Login from './components/Login/Login';

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      {/* Navbar giữ nguyên như bạn đã viết */}
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
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CẤU HÌNH BÀI 3: ĐỊNH TUYẾN (ROUTES) */}
      <Container className="mt-3">
        <Routes>
          {/* Trang danh sách phim (trang chủ) */}
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies" element={<MoviesList />} />

          {/* Trang chi tiết phim (có ID) */}
          <Route path="/movies/:id" element={<Movie user={user} />} />

          {/* Trang thêm review (chỉ cho phép nếu đã login) */}
          <Route
            path="/movies/:id/review"
            element={<AddReview user={user} />}
          />

          {/* Trang login */}
          <Route
            path="/login"
            element={<Login login={login} />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;