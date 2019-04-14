const Typograf = require("typograf");

const typograf = new Typograf({
  locale: ["ru", "en-US"],
  htmlEntity: { type: "name" }
});

module.exports = { typograf };
