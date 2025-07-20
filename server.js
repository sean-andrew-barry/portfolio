import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.MAIL_SECURE === 'true', // true for 465
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
});

// (Optional but helpful) verify at startup
transporter
.verify()
.then(() => console.log('Mail transporter ready'))
.catch(err => console.error('Mail transporter error:', err));

const app = express();
app.use(express.json()); // body-parser

// Simple HTML escaping
function escapeHtml(str = '') {
  return str
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

// API routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, company } = req.body || {};

    // Honeypot (if included in form)
    if (company) return res.sendStatus(200);

    // Basic validation
    if (![name, email, subject, message].every(Boolean))
      return res.status(400).json({ error: 'Missing required fields.' });

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return res.status(400).json({ error: 'Invalid email.' });

    // (Optional) length caps
    if (subject.length > 200) return res.status(400).json({ error: 'Subject too long.' });
    if (message.length > 10000) return res.status(400).json({ error: 'Message too long.' });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`, // must be your authenticated domain mailbox
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      replyTo: `${name} <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        message
      ].join('\n'),
      html: `
        <h2>New Portfolio Contact</h2>
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(name)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>Subject:</strong> ${escapeHtml(subject)}</li>
        </ul>
        <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return res.sendStatus(200);
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  // DEV – inject Vite’s middleware for HMR, TS transform, etc.
  const { createServer } = await import('vite');
  const vite = await createServer({ server: { middlewareMode: true } }); // :contentReference[oaicite:0]{index=0}
  app.use(vite.middlewares);
} else {
  // PROD – just serve the built assets
  const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist');
  app.use(express.static(dist));
  // history-fallback so React Router works:
  app.get('*', (_, res) => res.sendFile(path.join(dist, 'index.html')));
}

// Boot
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Ready at: http://localhost:${PORT}`));
