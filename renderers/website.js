function renderTitle({ title, url }) {
  const titleContent = url
    ? `<a target="_blank" rel="noopener noreferrer" href="${url}">${title}</a>`
    : title;

  return `<h3 class="heading heading--2">${titleContent}</h3>`;
}

function renderDescription({ description }) {
  const descriptionParagraphs = Array.isArray(description)
    ? description
    : [description];

  return descriptionParagraphs
    .map(paragraph => `<p class="paragraph">${paragraph}</p>`)
    .join("\n");
}

function renderForWebsite(entry) {
  return entry.items
    .map(item => `${renderTitle(item)}\n${renderDescription(item)}`)
    .join("\n\n");
}

module.exports = { renderForWebsite };
