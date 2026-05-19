import axios from "axios";

class MovieDataService {
  getAll(page = 0) {
    return axios.get(`http://localhost:5000/api/v1/movies?page=${page}`);
  }

  get(id) {
    return axios.get(`http://localhost:5000/api/v1/movies/id/${id}`);
  }

  // Phương thức này hỗ trợ cho Bài 2 (Tìm kiếm phim theo title hoặc rating)
  find(query, by = "title", page = 0) {
    return axios.get(`http://localhost:5000/api/v1/movies?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return axios.post("http://localhost:5000/api/v1/movies/review", data);
  }

  updateReview(data) {
    return axios.put("http://localhost:5000/api/v1/movies/review", data);
  }

  deleteReview(id, userId) {
    return axios.delete("http://localhost:5000/api/v1/movies/review", {
      data: { review_id: id, user_id: userId }
    });
  }

  getRatings() {
    return axios.get("http://localhost:5000/api/v1/movies/ratings");
  }
}

// Export một instance (đối tượng) của class để các file khác (như Components) có thể import và dùng trực tiếp
export default new MovieDataService();