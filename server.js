require('dotenv').config();

const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css':  'text/css; charset=UTF-8',
  '.js':   'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon'
};

/* ── Nodemailer transporter helper (credentials never leave the server) ── */
function getTransporter() {
  const user = (process.env.SMTP_USER || '').trim();
  // Strip spaces from App Password if present (e.g., "kxhh gqfq fvwd vttk" -> "kxhhgqfqfvwdvttk")
  const pass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });
}

/* ── Collect full request body ── */
function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; if (data.length > 20000) req.destroy(); });
    req.on('end',  () => resolve(data));
    req.on('error', reject);
  });
}

/* ── Contact form API handler ── */
async function handleContact(req, res) {
  try {
    const raw  = await readBody(req);
    const body = JSON.parse(raw);

    const name        = (body.name        || '').trim();
    const email       = (body.email       || '').trim();
    const projectType = (body.projectType || '').trim();
    const message     = (body.message     || '').trim();

    // Server-side validation
    if (!name || !email || !message) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ok: false, error: 'Please fill out all required fields.' }));
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ok: false, error: 'Please enter a valid email address.' }));
    }

    const transporter = getTransporter();
    const smtpUser = (process.env.SMTP_USER || '').trim();
    const toEmail  = (process.env.TO_EMAIL || '').trim() || smtpUser;

    await transporter.sendMail({
      from:    `"Abdul Shakoor Portfolio" <${smtpUser}>`,
      to:      toEmail,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${projectType || 'General'} — from ${name}`,
      text: [
        `Name:             ${name}`,
        `Email:            ${email}`,
        `Project Category: ${projectType}`,
        '',
        'Message:',
        message,
        '',
        '— Sent via Abdul Shakoor Creative Portfolio'
      ].join('\n')
    });

    console.log(`[contact] Email sent — from: ${email}, project: ${projectType}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error('[contact] Error:', err.message);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false, error: 'Server error. Please try again or contact me directly.' }));
  }
}

/* ── Main HTTP server ── */
const server = http.createServer((req, res) => {
  // API route: POST /contact
  if (req.method === 'POST' && req.url === '/contact') {
    return handleContact(req, res);
  }

  // Static file serving
  let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);

  // Security: block path traversal and .env access
  if (!filePath.startsWith(PUBLIC_DIR) || path.basename(filePath).startsWith('.')) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  const ext         = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Portfolio server is running locally at http://localhost:${PORT}`);
});
