import React, { useState } from 'react';
import MovieDataService from '../../services/movie';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const AddReview = ({ user }) => {
  // Lấy id của movie từ URL (ví dụ: /movies/123/review)
  let { id } = useParams();

  // Lấy dữ liệu state được truyền qua Link (để phân biệt Sửa hay Thêm)
  let location = useLocation();
  let editing = false;
  let initialReviewState = "";

  // Nếu trong state có currentReview thì nghĩa là đang ở chế độ Sửa
  if (location.state && location.state.currentReview) {
    editing = true;
    initialReviewState = location.state.currentReview.text;
  }

  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const onChangeReview = e => {
    const review = e.target.value;
    setReview(review);
  };

  const saveReview = () => {
    var data = {
      text: review,
      name: user.name,
      user_id: user.id,
      movie_id: id // Lấy từ useParams
    };

    if (editing) {
      // Nếu đang Edit thì gọi updateReview và truyền thêm review_id
      data.review_id = location.state.currentReview._id;
      MovieDataService.updateReview(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      // Nếu không phải Edit thì gọi createReview
      MovieDataService.createReview(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <Container className="mt-4">
      {/* Nếu đã submit thành công thì hiển thị nút quay lại Movie */}
      {submitted ? (
        <div>
          <h4>Review submitted successfully</h4>
          <Link to={"/movies/" + id}>
            <Button variant="success">Back to Movie</Button>
          </Link>
        </div>
      ) : (
        /* Nếu chưa submit thì hiển thị form để nhập */
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{editing ? "Edit Review" : "Create Review"}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={onChangeReview}
            />
          </Form.Group>
          <Button variant="primary" onClick={saveReview}>
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default AddReview;