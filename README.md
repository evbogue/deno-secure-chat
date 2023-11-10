### secure chat with Deno

In this example we use ed25519 keypairs to sign sha256 hashes of every message, so that we can authenticate message integrity client-side when new messages are received.

Run it on your local:

```
deno run --allow-all --unstable serve.js
```

Try it on Deno Deploy:

---
MIT
