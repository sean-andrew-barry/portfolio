import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json()); // body-parser

/* ---------- 1.  API routes ---------- */
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // TODO: DB insert, email, etc.
  return res.sendStatus(200);
});

/* ---------- 2.  Attach Vite in dev, serve /dist in prod ---------- */
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

/* ---------- 3.  Boot ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Ready at: http://localhost:${PORT}`));
