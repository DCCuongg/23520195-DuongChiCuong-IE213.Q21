// 3.1: Import package mongodb và tạo hằng số ObjectId
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

// 3.1: Tạo biến reviews để tham chiếu tới collection
let reviews;

class ReviewsDAO {
  // 3.2: Phương thức injectDB kết nối tới collection
  static async injectDB(conn) {
    if (reviews) {
      return;
    }
    try {
      // Kết nối tới database sample_mflix và collection reviews
      reviews = await conn.db("sample_mflix").collection("reviews");
    } catch (e) {
      console.error(`Unable to establish collection handles in reviewsDAO: ${e}`);
    }
  }

  // 3.3: Phương thức addReview sử dụng insertOne()
  static async addReview(movieId, user, review, date) {
    try {
      const reviewDoc = {
        name: user.name,
        user_id: user._id, // Nhớ đổi thành MSSV khi test ở máy khách
        date: date,
        text: review,
        // Ép kiểu string movieId thành ObjectId
        movie_id: new ObjectId(movieId),
      };
      return await reviews.insertOne(reviewDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  // 3.4: Phương thức updateReview sử dụng updateOne()
  static async updateReview(reviewId, userId, text, date) {
    try {
      const updateResponse = await reviews.updateOne(
        // Filter: Phải khớp cả reviewId (ObjectId) và userId mới cho sửa
        { user_id: userId, _id: new ObjectId(reviewId) },
        { $set: { text: text, date: date } },
      );
      return updateResponse;
    } catch (e) {
      console.error(`Unable to update review: ${e}`);
      return { error: e };
    }
  }

  // 3.5: Phương thức deleteReview sử dụng deleteOne()
  static async deleteReview(reviewId, userId) {
    try {
      const deleteResponse = await reviews.deleteOne({
        // Filter: Phải khớp cả reviewId (ObjectId) và userId mới cho xóa
        _id: new ObjectId(reviewId),
        user_id: userId,
      });
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete review: ${e}`);
      return { error: e };
    }
  }

  // Phương thức hỗ trợ lấy review (đã làm ở các bước trước)
  static async getReviewsByMovieId(movieId) {
    try {
      const cursor = await reviews.find({ movie_id: new ObjectId(movieId) });
      return await cursor.toArray();
    } catch (e) {
      console.error(`Unable to get reviews: ${e}`);
      return { error: e };
    }
  }
}

module.exports = ReviewsDAO;