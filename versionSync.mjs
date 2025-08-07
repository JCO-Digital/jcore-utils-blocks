import { readFileSync, writeFileSync } from "fs";

try {
  const pluginFile = "jutils-blocks.php";
  const readmeFile = "readme.txt";
  const pack = JSON.parse(readFileSync("package.json"));
  const plugin = readFileSync(pluginFile).toString();
  let readme = readFileSync(readmeFile).toString();

  const match = plugin.match(/\/\*\*.*?\*\//gms);
  if (match) {
    const comment = match[0];
    if (comment.indexOf("Plugin Name:") > -1) {
      let newComment = comment.replace(
        /Version: .*/,
        `Version: ${pack.version}`,
      );
      readme = readme.replace(
        /Stable tag:        [0-9.]+/,
        `Stable tag:        ${pack.version}`
      );
      if (pack.description) {
        newComment = newComment.replace(
          /Description: .*/,
          `Description: ${pack.description}`,
        );
      }
      if (pack.author) {
        newComment = newComment.replace(/Author: .*/, `Author: ${pack.author}`);
        readme = readme.replace(
          /Contributors:      .*/,
          `Contributors:      ${pack.author}`
        );
      }
      if (pack.homepage) {
        newComment = newComment.replace(
          /Plugin URI: .*/,
          `Plugin URI: ${pack.homepage}`,
        );
      }
      writeFileSync(pluginFile, plugin.replace(comment, newComment));
    }
  }


  writeFileSync(readmeFile, readme);

} catch (error) {
  console.error(error);
}
