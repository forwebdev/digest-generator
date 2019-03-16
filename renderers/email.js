function renderForEmail(entry) {
  return entry.items
    .map(
      item => `<mj-text font-size="20px" line-height="30px" padding-bottom="0"><a href="${
        item.url
      }">${item.title}</a></mj-text>
<mj-text line-height="24px">${item.description}</mj-text>`
    )
    .join(
      `\n\n<mj-divider border-width="1px" border-color="#e0e0e0"></mj-divider>\n\n`
    );
}

module.exports = { renderForEmail };
