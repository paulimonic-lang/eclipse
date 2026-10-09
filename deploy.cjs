const fs = require('fs');
const path = require('path');
const ftp = require('basic-ftp');

// 1. Find .env file: check local project first, then global user profile
function loadEnv() {
  const localEnv = path.resolve(__dirname, '.env');
  const userHome = process.env.USERPROFILE || process.env.HOME || 'C:\\Users\\Paulimonic';
  const globalEnv = path.join(userHome, '.cpanel.env');

  let envPath = null;
  if (fs.existsSync(localEnv)) {
    envPath = localEnv;
  } else if (fs.existsSync(globalEnv)) {
    envPath = globalEnv;
  }

  if (!envPath) {
    console.error('❌ Error: No credentials found!');
    console.error(`Please create either:`);
    console.error(`  1) Global (shared by all sites): ${globalEnv}`);
    console.error(`  2) Or Local to this project:    ${localEnv}\n`);
    console.error(`Format:`);
    console.error(`CPANEL_FTP_HOST=ftp.paulimonic.com`);
    console.error(`CPANEL_FTP_USER=paulimon`);
    console.error(`CPANEL_FTP_PASSWORD=your_cpanel_password`);
    console.error(`CPANEL_FTP_PORT=21`);
    console.error(`CPANEL_FTP_SECURE=false`);
    process.exit(1);
  }

  console.log(`🔑 Loading credentials from: ${envPath}`);
  const content = fs.readFileSync(envPath, 'utf8');
  const env = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
      env[key] = val;
    }
  }
  return env;
}

async function deploy() {
  const env = loadEnv();

  const host = env.CPANEL_FTP_HOST || 'ftp.paulimonic.com';
  const user = env.CPANEL_FTP_USER;
  const password = env.CPANEL_FTP_PASSWORD;
  const port = parseInt(env.CPANEL_FTP_PORT || '21', 10);
  const secure = env.CPANEL_FTP_SECURE === 'true';

  if (!user || !password) {
    console.error('❌ Missing CPANEL_FTP_USER or CPANEL_FTP_PASSWORD in .env');
    process.exit(1);
  }

  // Determine project subfolder on cPanel (default: eclipse)
  const projectName = process.argv[2] || env.PROJECT_FOLDER || 'eclipse';
  const remoteDir = `public_html/${projectName}`;
  const localDir = path.resolve(__dirname, '.output/public');

  if (!fs.existsSync(localDir)) {
    console.error(`❌ Build directory not found: ${localDir}`);
    console.error('Please run "npm run generate" first.');
    process.exit(1);
  }

  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    console.log(`\n📡 Connecting to ${host} as ${user}...`);
    await client.access({
      host,
      user,
      password,
      port,
      secure,
      secureOptions: {
        rejectUnauthorized: false
      }
    });

    console.log(`🔍 Checking remote directory structure...`);
    const rootList = await client.list();
    const hasPublicHtml = rootList.some(item => item.name === 'public_html');
    // If full cPanel user has public_html, put in public_html/molemo/<project>
    // If dedicated FTP user is scoped directly to molemo, put in <project>
    const targetDir = hasPublicHtml ? `public_html/molemo/${projectName}` : projectName;

    console.log(`📁 Ensuring remote directory exists: /${targetDir}...`);
    await client.ensureDir(targetDir);

    console.log(`🚀 Uploading files from ${localDir} to /${targetDir}...`);
    await client.uploadFromDir(localDir);

    console.log('\n' + '='.repeat(60));
    console.log('🎉 DEPLOYMENT SUCCESSFUL!');
    console.log(`🌐 Live Client URL: https://paulimonic.com/molemo/${projectName}/`);
    console.log('='.repeat(60) + '\n');
  } catch (err) {
    console.error('\n❌ FTP Deployment Error:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
