const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const { renderForWebsite } = require("./renderers/website");
const { renderForEmail } = require("./renderers/email");

const paths = {
  sourceDir: path.resolve(__dirname, "./source"),
  buildDir: path.resolve(__dirname, "./build")
};

const entries = fs.readdirSync(paths.sourceDir).map(fileName => ({
  name: path.parse(fileName).name,
  contents: fs.readFileSync(path.join(paths.sourceDir, fileName))
}));

rimraf.sync(paths.buildDir);
fs.mkdirSync(paths.buildDir);

entries.forEach(entry => {
  const parsedEntry = JSON.parse(entry.contents.toString());
  const entryDirPath = path.join(paths.buildDir, entry.name);

  fs.mkdirSync(entryDirPath);
  fs.writeFileSync(
    path.join(entryDirPath, "website.html"),
    renderForWebsite(parsedEntry)
  );
  fs.writeFileSync(
    path.join(entryDirPath, "email.html"),
    renderForEmail(parsedEntry)
  );
});
