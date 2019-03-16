function renderForWebsite(entry) {
  return entry.items
    .map(
      item => `<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="${
        item.url
      }">${item.title}</a></h3>
<p class="paragraph">${item.description}</p>
`
    )
    .join("\n");
}

module.exports = { renderForWebsite };
