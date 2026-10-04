const { execSync } = require('child_process');
const crypto = require('crypto');

// Generate a fresh Ed25519 key pair for Convex Auth
const { privateKey } = crypto.generateKeyPairSync('ed25519');
const privPem = privateKey.export({ type: 'pkcs8', format: 'pem' });

console.log('Generated private key:');
console.log(privPem);

// Set it via convex env
const cmd = `node_modules\\.bin\\convex.cmd env set JWT_PRIVATE_KEY`;
console.log('\nRunning: ' + cmd + ' <key>');

try {
  // Use stdin to pass the value to avoid shell escaping issues
  const result = execSync(cmd, {
    input: privPem,
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  console.log('Result:', result.toString());
} catch (e) {
  console.error('Error:', e.stderr?.toString() || e.message);
  console.log('\nManual steps:');
  console.log('1. Go to https://dashboard.convex.dev/t/lei-plei/hw-06/settings/environment-variables');
  console.log('2. Add environment variable: JWT_PRIVATE_KEY');
  console.log('3. Set value to:');
  console.log(privPem);
}
