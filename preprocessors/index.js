const { typograf } = require("./typograf");

function preprocessEntry({ title, subtitle, description, items, ...rest }) {
  return {
    ...rest,
    title: typograf.execute(title),
    subtitle: typograf.execute(subtitle),
    description: typograf.execute(description),
    items: items.map(({ title, description, ...rest }) => ({
      ...rest,
      title: typograf.execute(title),
      description: []
        .concat(description)
        .map(paragraph => typograf.execute(paragraph))
    }))
  };
}

module.exports = {
  preprocessEntry
};
