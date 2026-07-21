import fs from "fs";
import path from "path";

async function run() {
  const distPath = path.resolve("./dist");
  const indexHtmlPath = path.join(distPath, "index.html");
  
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error(`Build index.html not found at ${indexHtmlPath}`);
  }

  let html = fs.readFileSync(indexHtmlPath, "utf8");

  // Dynamically import the compiled SSR entry-server bundle.
  // Using a relative path works on all operating systems.
  const serverBundlePath = "./dist-server/entry-server.js";
  const absoluteServerBundlePath = path.resolve(serverBundlePath);
  if (!fs.existsSync(absoluteServerBundlePath)) {
    throw new Error(`Compiled server bundle not found at ${absoluteServerBundlePath}`);
  }

  // Use dynamic import to load the compiled server code
  const { render } = await import(serverBundlePath);
  const renderedHtml = render("/");

  // Replace the empty target container with pre-rendered content
  html = html.replace('<div id="root"></div>', `<div id="root">${renderedHtml}</div>`);

  fs.writeFileSync(indexHtmlPath, html, "utf8");
  console.log("Successfully prerendered main page (/) into dist/index.html");

  // Clean up the temporary server build directory
  fs.rmSync(path.resolve("./dist-server"), { recursive: true, force: true });
}

run().catch((err) => {
  console.error("Prerender error:", err);
  process.exit(1);
});
