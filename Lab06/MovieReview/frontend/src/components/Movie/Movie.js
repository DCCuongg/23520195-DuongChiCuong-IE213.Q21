import React, { useState, useEffect } from 'react';
import MovieDataService from '../../services/movie';
import { useParams, Link } from 'react-router-dom';
import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import moment from 'moment';

import styles from './Movie.module.css';

const Movie = ({ user }) => {
  let { id } = useParams();

  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: []
  });

  useEffect(() => {
    getMovie(id);
  }, [id]);

  const getMovie = id => {
    MovieDataService.get(id)
      .then(response => {
        setMovie(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteReview = (reviewId, index) => {
    MovieDataService.deleteReview(reviewId, user.id)
      .then(response => {
        // Cập nhật state bất biến (immutable) bằng filter
        setMovie((prevState) => ({
          ...prevState,
          reviews: prevState.reviews.filter((review) => review._id !== reviewId)
        }));
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Cột trái: Ảnh Poster */}
        <Col md={5} className="mb-4">
          <Image
            className={styles.posterImage}
            src={movie.poster || "/NoPoster.svg"}
            fluid
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/NoPoster.svg";
            }}
          />
        </Col>

        {/* Cột phải: Thông tin & Review */}
        <Col md={7}>
          <div className={styles.movieInfoCard}>
            <div className={styles.movieInfoHeader}>
              <h5 className={styles.movieInfoTitle}>{movie.title}</h5>
            </div>
            <div className={styles.movieInfoBody}>
              {movie.plot}
            </div>
          </div>

          {user && (
            <Link to={"/movies/" + id + "/review"}>
              <Button variant="primary" className="mb-3">
                Add Review
              </Button>
            </Link>
          )}

          {/* Giao diện Reviews */}
          <div className={styles.reviewsContainer}>
            <h3 className={styles.reviewsTitle}>Reviews</h3>

            {movie.reviews.length > 0 ? (
              movie.reviews.map((review, index) => {
                return (
                  <div key={index} className={styles.reviewItem}>
                    {/* Header review */}
                    <div className={styles.reviewHeader}>
                      {review.name} reviewed on {moment(review.date).format("Do MMMM YYYY")}
                    </div>
                    {/* Nội dung review */}
                    <p className={styles.reviewText}>{review.text}</p>

                    {/* Nút sửa/xóa */}
                    {user && user.id === review.user_id && (
                      <div className="mt-2">
                        {/* ĐÃ SỬA LẠI CÚ PHÁP LINK CHO CHUẨN REACT ROUTER V6+ */}
                        <Link
                          to={"/movies/" + id + "/review"}
                          state={{ currentReview: review }}
                        >
                          <Button variant="outline-primary" size="sm" className="me-2">
                            Edit
                          </Button>
                        </Link>

                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => deleteReview(review._id, index)}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;