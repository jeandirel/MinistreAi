import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import handler from './api/ai.js';

function apiDevPlugin() {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/ai', async (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            req.body = body;
            try {
              await handler(req, res);
            } catch (err) {
              console.error('API Error:', err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          try {
            await handler(req, res);
          } catch (err) {
            console.error('API Error:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), apiDevPlugin()],
  server: {
    port: 3000,
    host: true
  }
});
