// Thay vì dùng import, ta dùng require
const MoviesDAO = require("../dao/moviesDao");

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