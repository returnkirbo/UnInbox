import { Hono } from 'hono';
import type { Context } from 'hono';
import { unkey } from '@unkey/hono';
import type { UnkeyContext } from '@unkey/hono';

const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

app.post('/v1/send/transaction', (c: Context) => {
  //   fields:
  // from address
  // from name
  // to address
  // subject
  // plain body
  // html body
  return c.json({ ok: true });
});
