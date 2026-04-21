const MoviesDAO = require("../dao/moviesDao");

class MoviesController {
  // 1. Lấy danh sách phim (Đã có)
  static async apiGetMovies(req, res, next) {
    const moviesPerPage = req.query.moviesPerPage ? parseInt(req.query.moviesPerPage, 10) : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.rated) {
      filters.rated = req.query.rated;
    } else if (req.query.title) {
      filters.title = req.query.title;
    }

    const { moviesList, totalNumMovies } = await MoviesDAO.getMovies({
      filters,
      page,
      moviesPerPage,
    });

    let response = {
      movies: moviesList,
      page: page,
      filters: filters,
      entries_per_page: moviesPerPage,
      total_results: totalNumMovies,
    };
    res.json(response);
  }

  // 2. BỔ SUNG: Lấy chi tiết một bộ phim theo ID
  static async apiGetMovieById(req, res, next) {
    try {
      // Lấy id từ params (do trong route ta định nghĩa là /id/:id)
      let id = req.params.id || {};
      let movie = await MoviesDAO.getMovieById(id);

      if (!movie) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(movie);
    } catch (e) {
      console.error(`api, ${e}`);
      res.status(500).json({ error: e.message });
    }
  }

  // 3. BỔ SUNG: Lấy danh sách các Ratings (G, PG, R,...)
  static async apiGetRatings(req, res, next) {
    try {
      let ratings = await MoviesDAO.getRatings();
      res.json(ratings);
    } catch (e) {
      console.error(`api, ${e}`);
      res.status(500).json({ error: e.message });
    }
  }
}

module.exports = MoviesController;