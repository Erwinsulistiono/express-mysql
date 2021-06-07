const {
  getUserGallery,
  create,
  deleteGallery,
  getGalleryById
} = require("./gallery.service");

module.exports = {
  addGallery: (req, res) => {
    const body = req.body;
    getGalleryById(body.gallery.id, (err, results) => {
      if (results) {
        return res.json({
          success: 0,
          message: "Photos already on gallery"
        });
      }
      create(body.gallery, (err, results) => {
        if (err) {
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    });
  },
  getUserGallery: (req, res) => {
    const body = req.body;
    getUserGallery(body.id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  deleteGallery: (req, res) => {
    const data = req.body;
    deleteGallery(data, (err) => {
      if (err) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
    });
  }
};
