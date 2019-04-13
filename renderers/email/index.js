const { renderBaseMarkup } = require("./base");

function renderImage({ image, title }) {
  if (!image) {
    return "";
  }

  return `<mj-image src="${image.url}" alt="${image.alt || title}" />\n`;
}

function renderTitle({ title, url }) {
  const titleContent = url ? `<a href="${url}">${title}</a>` : title;

  return `<mj-text font-size="20px" line-height="30px" padding-bottom="0">${titleContent}</mj-text>\n`;
}

function renderDescription({ description }) {
  const descriptionParagraphs = Array.isArray(description)
    ? description
    : [description];

  return descriptionParagraphs
    .map(paragraph => `<mj-text line-height="24px">${paragraph}</mj-text>`)
    .join("\n");
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
