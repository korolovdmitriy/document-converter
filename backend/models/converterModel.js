const marked = require("marked").marked;
console.log(typeof marked);

async function convertToHtml(markdown) {
  return marked(markdown);
}

module.exports = { convertToHtml };
