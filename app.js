const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./api/users/user.router");
const galleryRouter = require("./api/gallery/gallery.router");

app.use(express.json());
app.use(cors())
app.use("/api/users", userRouter);
app.use("/api/gallery", galleryRouter);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
