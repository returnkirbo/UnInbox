import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { UnkeyContext, unkey } from '@unkey/hono';

const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

// if unkey env vars are not set, use alternate redis based system
app.use('*', unkey());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

// planned routes

//! service level keys
//* /v1/send/transaction
// /v1/send/broadcast

//! org level keys
// v1/org
// v1/org/users - get list of users in org with join date etc, post invite new user
// v1/org/domain - get list of domains in org, post new domain

//! user level keys
// v1/users - get list of users in org
// v1/groups - get list of groups in org
// v1/contact - get list of contact in org
// v1/convos/ - get list with pagination, post new convo,
// v1/convos/:id - get list of messages in convo, post new message
// v1/codes - get list of codes in latest emails

const port = Number(process.env.PORT) || 3400;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
});
