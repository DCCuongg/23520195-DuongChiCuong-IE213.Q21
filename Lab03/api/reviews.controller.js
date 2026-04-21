const ReviewsDAO = require("../dao/reviewsDao");
const MoviesDAO = require("../dao/moviesDao"); // Phải thêm cái này nếu để hàm GetMovie ở đây

class ReviewsController {
  static async apiPostReview(req, res, next) {
    try {
      const movieId = req.body.movie_id;
      const review = req.body.text;
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id
      };
      const date = new Date();

      await ReviewsDAO.addReview(movieId, userInfo, review, date);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const text = req.body.text;
      const date = new Date();

      const ReviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        req.body.user_id,
        text,
        date
      );

      if (ReviewResponse.error) {
        return res.status(400).json({ error: ReviewResponse.error });
      }

      if (ReviewResponse.modifiedCount === 0) {
        return res.status(404).json({ error: "Unable to update review" });
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const userId = req.body.user_id;
      await ReviewsDAO.deleteReview(reviewId, userId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetReviews(req, res, next) {
    try {
      let id = req.query.id || {};
      const reviews = await ReviewsDAO.getReviewsByMovieId(id);
      res.json(reviews);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // Chuyển các hàm này sang MoviesController nếu file Route dùng MoviesCtrl
  static async apiGetMovieById(req, res, next) {
    try {
      let id = req.params.id;
      let movie = await MoviesDAO.getMovieById(id);
      if (!movie) {
        return res.status(404).json({ error: "Not found" });
      }
      res.json(movie);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetRatings(req, res, next) {
    try {
      let ratings = await MoviesDAO.getRatings();
      res.json(ratings);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

module.exports = ReviewsController;