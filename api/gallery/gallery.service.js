const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO photos(id, user_id, album_id, title, url, thumbnail_url) values(?,?,?,?,?,?)`,
      [
        data.id,
        data.userId,
        data.albumId,
        data.title,
        data.url,
        data.thumbnailUrl
      ],
      (err, results, fields) => {
        if (err) {
          callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  getUserGallery: (data, callBack) => {
    pool.query(
      `SELECT * FROM photos WHERE user_id = ?`,
      [data],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getGalleryById: (id, callBack) => {
    pool.query(
      `SELECT * FROM photos WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteGallery: (data, callBack) => {
    console.log(data.id)
    console.log(data.userid)  
    pool.query(
      `DELETE FROM photos WHERE id = ? AND user_id = ?`,
      [data.id, data.userid],
      (error) => {
        if (error) {
          callBack(error);
        }
        return callBack(null);
      }
    );
  }
};
