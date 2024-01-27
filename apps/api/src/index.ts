import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { UnkeyContext, unkey } from '@unkey/hono';

const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

// if unkey env vars are not set, use alternate redis based system
app.use('*', unkey());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

// key routes
//* /v1/transactional
// /v1/broadcast

const port = Number(process.env.PORT) || 3400;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
});
