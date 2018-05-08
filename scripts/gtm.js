// Renders the Google Tag Manager snippet in all HTML files during the deploy step
const fs = require("fs");
const pify = require("pify");
const replace = require("replace-in-file");

async function run() {
  // fs.readFile does not return a Promise natively, wrap it in `pify` so it does.
  const gtm = await pify(fs.readFile)("./source/theme/google-tag-manager.html", "utf-8");

  if (typeof gtm !== "string") {
    throw new Error(
      `Could not load Google Tag Manager snippet from \`./source/theme/google-tag-manager.html\`, expected a string but got \`${typeof gtm}\``
    );
  }

  const changedFiles = await replace({
    files: "build/**/*[!.]",
    from: "<!-- GOOGLE_TAG_MANAGER -->",
    to: gtm
  });

  if (!changedFiles.length) {
    throw new Error(
      "Google Tag Manager was not inserted in any file. Was `<!-- GOOGLE_TAG_MANAGER -->` removed from the main layout file?"
    );
  }

  return changedFiles.length;
}

run()
  .then(affectedFiles => console.log(`Wrote Google Tag Manger to ${affectedFiles} files.`))
  .catch(error => {
    console.error(error.message);
    return 1;
  });
