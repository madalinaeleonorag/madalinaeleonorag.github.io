const fs = require("fs");
const path = require("path");

const docsDir = path.resolve("docs");
const browserDir = path.join(docsDir, "browser");
const serverDir = path.join(docsDir, "server");

if (!fs.existsSync(browserDir)) {
  console.error("❌ docs/browser not found. Did the SSR build run?");
  process.exit(1);
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1️⃣ Copy browser → docs
copyRecursive(browserDir, docsDir);

// 2️⃣ Cleanup SSR folders
fs.rmSync(browserDir, { recursive: true, force: true });
fs.rmSync(serverDir, { recursive: true, force: true });

console.log("✅ docs/browser flattened into docs/");
