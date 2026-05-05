import React, { useState, useEffect } from 'react';
import MovieDataService from '../../services/movie'; // Đường dẫn tới file service bạn đã tạo
import { Link } from 'react-router-dom';
import { Form, Button, Col, Row, Container, Card } from 'react-bootstrap';

const MoviesList = () => {
  // 2.1 Tạo các biến trạng thái
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [ratings, setRatings] = useState(["All Ratings"]);

  // 2.2 Gọi chung các hàm lấy dữ liệu sau khi giao diện kết xuất xong
  useEffect(() => {
    retrieveMovies();
    retrieveRatings();
  }, []);

  const retrieveMovies = () => {
    MovieDataService.getAll()
      .then(response => {
        setMovies(response.data.movies);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveRatings = () => {
    MovieDataService.getRatings()
      .then(response => {
        // Thêm "All Ratings" vào đầu mảng danh sách ratings lấy từ backend
        setRatings(["All Ratings"].concat(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Các hàm cập nhật giá trị ô tìm kiếm
  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const onChangeSearchRating = e => {
    const searchRating = e.target.value;
    setSearchRating(searchRating);
  };

  // 2.5 Phương thức tìm phim theo Title và Rating
  const find = (query, by) => {
    MovieDataService.find(query, by)
      .then(response => {
        setMovies(response.data.movies);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    find(searchTitle, "title");
  };

  const findByRating = () => {
    if (searchRating === "All Ratings") {
      retrieveMovies();
    } else {
      find(searchRating, "rated");
    }
  };

  return (
    <Container>
      {/* 2.3 Tạo 2 search form gồm tìm theo title, và tìm theo rating */}
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={findByTitle} className="mt-2">
              Search Title
            </Button>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control as="select" onChange={onChangeSearchRating}>
                {ratings.map((rating, index) => {
                  return (
                    <option value={rating} key={index}>
                      {rating}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="button" onClick={findByRating} className="mt-2">
              Search Rating
            </Button>
          </Col>
        </Row>
      </Form>

      {/* 2.4 Hiển thị các movie bằng <Card> của React-bootstrap */}
      <Row>
        {movies.map((movie) => {
          return (
            <Col key={movie._id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={movie.poster + "/100px180"}
                  onError={(e) => {
                    // Ngắt sự kiện onError để tránh vòng lặp vô tận
                    e.target.onerror = null;
                    // Đổi sang một dịch vụ placeholder khác
                    e.target.src = "/NoPoster.svg";
                  }}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    <strong>Rating: </strong>{movie.rated}<br />
                    <strong>Plot: </strong>{movie.plot ? movie.plot.substring(0, 100) + "..." : "No plot available"}
                  </Card.Text>
                  <Link to={"/movies/" + movie._id}>
                    <Button variant="primary">View Reviews</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MoviesList;