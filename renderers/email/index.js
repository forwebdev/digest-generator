const he = require("he");
const { renderBaseMarkup } = require("./base");

function renderImage(item) {
  if (!item.image) {
    return "";
  }

  return `<mj-image src="${item.image}" alt="${he.escape(item.title)}" />\n`;
}

function renderTitle(item) {
  return `<mj-text font-size="20px" line-height="30px" padding-bottom="0"><a href="${
    item.url
  }">${he.escape(item.title)}</a></mj-text>\n`;
}

function renderDescription(item) {
  return `<mj-text line-height="24px">${he.escape(
    item.description
  )}</mj-text>\n`;
}

function renderDivider() {
  return `\n<mj-divider border-width="1px" border-color="#e0e0e0"></mj-divider>\n\n`;
}

function renderForEmail({
  description,
  items,
  subtitle,
  title,
  webVersionLink
}) {
  const body = items
    .map(
      item =>
        `${renderImage(item)}${renderTitle(item)}${renderDescription(item)}`
    )
    .join(renderDivider());

  return renderBaseMarkup({
    body,
    description,
    subtitle,
    title,
    webVersionLink
  });
}

module.exports = { renderForEmail };
