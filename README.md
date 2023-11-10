### secure chat with Deno

In this example we use ed25519 keypairs to sign sha256 hashes of every message's text data, so that we can authenticate message integrity client-side when new messages are received.

The message protocol is the same as the one used by [bogbook](https://github.com/evbogue/bogbook).

Run it on your local:

```
deno run --allow-all --unstable serve.js
```

Try it on Deno Deploy:

https://deno-secure-chat.deno.dev/

---
MIT
