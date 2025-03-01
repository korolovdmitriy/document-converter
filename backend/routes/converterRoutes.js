const express = require("express");
const converterController = require("../controllers/converterController");

const router = express.Router();

router.post("/convert/markdown", converterController.convertToHtml);

module.exports = router;
