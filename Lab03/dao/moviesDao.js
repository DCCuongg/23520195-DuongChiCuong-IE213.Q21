// import MongoDB
const { ObjectId } = require("mongodb");

// biến lưu collection movies
let movies;

// class xử lý truy xuất dữ liệu (DAO)
class MoviesDAO {
  // injectDB:
  // dùng để kết nối tới collection "movies" trong database
  static async injectDB(conn) {
    if (movies) {
      return;
    }
    try {
      movies = await conn.db("sample_mflix").collection("movies");
    } catch (e) {
      console.error(`Unable to establish collection handles: ${e}`);
    }
  }

  // getMovies:
  // lấy danh sách movies và tổng số lượng
  static async getMovies({
    filters = null,
    page = 0,
    moviesPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("title" in filters) {
        // Tìm kiếm văn bản dựa trên tiêu đề
        query = { $text: { $search: filters["title"] } };
      } else if ("rated" in filters) {
        // Tìm kiếm chính xác theo độ tuổi (G, PG, R...)
        query = { "rated": { $eq: filters["rated"] } };
      }
    }

    let cursor;

    try {
      // Tìm kiếm với query, sau đó giới hạn số lượng và bỏ qua các trang trước đó
      cursor = await movies
        .find(query)
        .limit(moviesPerPage)
        .skip(moviesPerPage * page);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { moviesList: [], totalNumMovies: 0 };
    }

    try {
      const moviesList = await cursor.toArray();
      const totalNumMovies = await movies.countDocuments(query);

      return { moviesList, totalNumMovies };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { moviesList: [], totalNumMovies: 0 };
    }
  }
  // Thêm vào trong class MoviesDAO
  static async getRatings() {
    let ratings = [];
    try {
      // Lấy tất cả các giá trị rating duy nhất trong collection movies
      ratings = await movies.distinct("rated");
      return ratings;
    } catch (e) {
      console.error(`Unable to get ratings, ${e}`);
      return ratings;
    }
  }

  static async getMovieById(id) {
    try {
      const pipeline = [
        {
          // Bước 1: Tìm phim theo ID
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          // Bước 2: Liên kết với collection "reviews" (giống JOIN trong SQL)
          $lookup: {
            from: "reviews",
            let: { id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$movie_id", "$$id"],
                  },
                },
              },
              {
                $sort: {
                  date: -1, // Sắp xếp review mới nhất lên đầu
                },
              },
            ],
            as: "reviews", // Lưu kết quả vào mảng "reviews" trong object phim
          },
        },
        {
          // Bước 3: Gom nhóm kết quả
          $addFields: {
            reviews: "$reviews",
          },
        },
      ];
      return await movies.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getMovieById: ${e}`);
      throw e;
    }
  }
}

// export class để dùng ở controller hoặc route
module.exports = MoviesDAO;