const converterModel = require("../models/converterModel");

async function convertToHtml(req, res) {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const html = await converterModel.convertToHtml(file.buffer.toString());
    res.json({ html });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { convertToHtml };
