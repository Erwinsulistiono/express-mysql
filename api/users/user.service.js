const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO users(username, password) values(?,?)`,
      [
        data.username,
        data.password
      ],
      (err, results, fields) => {
        if (err) {
          console.log(err)
          callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUsername: (username, callBack) => {
    pool.query(
      `SELECT * FROM users WHERE username = ?`,
      [username],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `SELECT * FROM users WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `SELECT * FROM users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE users SET username=?, password=? WHERE id = ?`,
      [
        data.username,
        data.password,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE FROM users WHERE id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
