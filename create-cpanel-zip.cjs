const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const sourceDir = path.resolve(__dirname, '.output/public');
const targetZip = path.resolve(__dirname, 'cpanel-public_html.zip');
const cpanelFolder = path.resolve(__dirname, 'cpanel-public_html');

console.log('Source directory:', sourceDir);
console.log('Target ZIP:', targetZip);

// 1. Clean up old zip if present
if (fs.existsSync(targetZip)) {
  fs.unlinkSync(targetZip);
  console.log('Removed old cpanel-public_html.zip');
}

// 2. Synchronize cpanel-public_html folder for local inspection
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean old folder and copy fresh
if (fs.existsSync(cpanelFolder)) {
  fs.rmSync(cpanelFolder, { recursive: true, force: true });
}
copyDirRecursive(sourceDir, cpanelFolder);
console.log('Updated cpanel-public_html directory.');

// 3. Create fresh zip with strict POSIX forward slashes and Unix permissions
const output = fs.createWriteStream(targetZip);
const archive = archiver('zip', {
  zlib: { level: 9 },
  forceLocalTime: true
});

output.on('close', () => {
  console.log(`\nSUCCESS: Created ${targetZip}`);
  console.log(`Total size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB (${archive.pointer()} bytes)`);
});

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn('Archiver warning:', err);
  } else {
    throw err;
  }
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Helper to recursively add files with POSIX forward slashes
function addDirectoryToZip(dir, baseDir = '') {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const relativePosix = baseDir ? `${baseDir}/${item}` : item;

    if (stat.isDirectory()) {
      // Add directory entry with 0755 permissions and trailing slash
      archive.append(null, {
        name: relativePosix + '/',
        mode: 0o755
      });
      addDirectoryToZip(fullPath, relativePosix);
    } else {
      // Add file entry with 0644 permissions and forward slashes
      archive.file(fullPath, {
        name: relativePosix,
        mode: 0o644
      });
    }
  }
}

addDirectoryToZip(sourceDir);
archive.finalize();
