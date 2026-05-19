import React, { useState, useEffect } from 'react';
import MovieDataService from '../../services/movie';
import { Link } from 'react-router-dom';
import { Form, Button, Col, Row, Container, Card, Spinner } from 'react-bootstrap';

import './MoviesList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [ratings, setRatings] = useState(["All Ratings"]);

  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentSearchMode, setCurrentSearchMode] = useState("");

  // Thêm biến trạng thái để chặn người dùng click liên tục
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    retrieveRatings();
  }, []);

  useEffect(() => {
    retrieveNextPage();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [currentSearchMode]);

  const retrieveMovies = () => {
    setCurrentSearchMode("");
    setIsLoading(true); // Bắt đầu tải dữ liệu -> Khóa nút

    MovieDataService.getAll(currentPage)
      .then(response => {
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
        setEntriesPerPage(response.data.entries_per_page);
        setIsLoading(false); // Tải xong -> Mở khóa nút
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false); // Lỗi cũng phải mở khóa nút
      });
  };

  const retrieveRatings = () => {
    MovieDataService.getRatings()
      .then(response => {
        setRatings(["All Ratings"].concat(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = e => {
    setSearchTitle(e.target.value);
  };

  const onChangeSearchRating = e => {
    setSearchRating(e.target.value);
  };

  const find = (query, by) => {
    setIsLoading(true); // Bắt đầu tải dữ liệu -> Khóa nút
    MovieDataService.find(query, by, currentPage)
      .then(response => {
        setMovies(response.data.movies);
        setIsLoading(false); // Tải xong -> Mở khóa nút
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const findByTitle = () => {
    setCurrentSearchMode("findByTitle");
    find(searchTitle, "title");
  };

  const findByRating = () => {
    setCurrentSearchMode("findByRating");
    if (searchRating === "All Ratings") {
      retrieveMovies();
    } else {
      find(searchRating, "rated");
    }
  };

  const retrieveNextPage = () => {
    if (currentSearchMode === "findByTitle") {
      findByTitle();
    } else if (currentSearchMode === "findByRating") {
      findByRating();
    } else {
      retrieveMovies();
    }
  };

  return (
    <Container>
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
            <Button variant="primary" type="button" onClick={findByTitle} className="mt-2" disabled={isLoading}>
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
            <Button variant="primary" type="button" onClick={findByRating} className="mt-2" disabled={isLoading}>
              Search Rating
            </Button>
          </Col>
        </Row>
      </Form>

      <Row>
        {movies.map((movie) => {
          return (
            <Col key={movie._id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={movie.poster + "/100px180"}
                  onError={(e) => {
                    e.target.onerror = null;
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

      {/* --- Thanh phân trang (Pagination) đã xử lý Spam Click --- */}
      <div className="pagination-container">

        {/* Nút Lùi */}
        <Button
          variant="outline-primary"
          // Dùng callback để update state an toàn hơn
          onClick={() => setCurrentPage(prevPage => prevPage - 1)}
          // Khóa nút nếu ở trang 0 HOẶC khi đang tải dữ liệu
          disabled={currentPage === 0 || isLoading}
        >
          &laquo; Previous
        </Button>

        {/* Trạng thái trang */}
        <div className="pagination-info">
          <span className="pagination-page-number">Page: {currentPage}</span>
          <span className="pagination-entries">
            {/* Nếu đang loading thì hiện chữ Loading, nếu không thì hiện text bthg */}
            {isLoading ? (
              <span className="text-primary fw-bold">
                <Spinner animation="border" size="sm" className="me-2" />
                Loading data...
              </span>
            ) : (
              `Showing up to ${entriesPerPage} results`
            )}
          </span>
        </div>

        {/* Nút Tiến */}
        <Button
          variant="outline-primary"
          onClick={() => setCurrentPage(prevPage => prevPage + 1)}
          // Khóa nút khi đang tải dữ liệu
          disabled={isLoading}
        >
          Next &raquo;
        </Button>

      </div>
    </Container>
  );
};

export default MoviesList;