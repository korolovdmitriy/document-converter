require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const converterRoutes = require("./routes/converterRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(upload.single("file")); // Adding middleware for uploading files

app.use("/api", converterRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
