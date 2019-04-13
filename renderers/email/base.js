const he = require("he");

const renderBaseMarkup = ({
  body,
  description,
  subtitle,
  title,
  webVersionLink
}) => `<mjml>
  <mj-head>
    <mj-font name="IBM Plex Sans" href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&amp;subset=cyrillic" />
    <mj-attributes>
      <mj-all font-family="IBM Plex Sans,Helvetica Neue,Helvetica,Arial,sans-serif" font-size="16px"></mj-all>
    </mj-attributes>
    <mj-preview>${he.escape(description)}</mj-preview>
  </mj-head>
  <mj-body>
    <!-- preheader -->
    <mj-section padding="5px 0">
      <mj-column>
        <mj-text align="right"><a href="${webVersionLink}">веб-версия</a></mj-text>
      </mj-column>
    </mj-section>
    <!-- /preheader -->

    <!-- header -->
    <mj-section padding="15px 0" background-color="#000000">
      <mj-column>
        <mj-text align="center" font-size="28px" color="#FFFFFF">${he.escape(
          title
        )}</mj-text>
        <mj-text padding-top="5px" align="center" font-size="16px" line-height="24px" color="#FFFFFF">${he.escape(
          subtitle
        )}</mj-text>
      </mj-column>
    </mj-section>
    <!-- /header -->

    <mj-section background-color="#ffffff">
      <mj-column>
        ${body}
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

module.exports = {
  renderBaseMarkup
};
