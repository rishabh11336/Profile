# Cloudflare redirects

Goal: one canonical host, `https://singhrishabh.com`. Every other host and protocol answers
with a single **301** straight to the matching path, with no redirect chains.

All rules are **Rules → Redirect Rules → Create rule → Wildcard pattern** (available on the
Free plan). Tick **Preserve query string** on each one.

---

## Zone: `singhrishabh.com`

### (a) www → apex

| Field | Value |
|---|---|
| Request URL | `https://www.singhrishabh.com/*` |
| Target URL | `https://singhrishabh.com/${1}` |
| Status code | `301` |
| Preserve query string | ✓ |

The rule only fires if `www` resolves through Cloudflare. In **DNS**, `www` must exist and be
**Proxied** (orange cloud), for example `CNAME www → singhrishabh.com`.

The URL pattern starts with `https://`. Rule (b) upgrades `http://www...` first, so that request
also reaches this rule. That makes two hops for the rare `http://www` case and one for everything else.

### (b) Always Use HTTPS

**SSL/TLS → Edge Certificates → Always Use HTTPS: On.**

While you are there:
- **SSL/TLS → Overview → encryption mode: Full (strict).** GitHub Pages serves a valid certificate for the custom domain once **Settings → Pages → Enforce HTTPS** is ticked in the repo.
- If GitHub cannot issue its certificate while the record is proxied, set the apex record to **DNS only** (grey cloud) until the certificate shows as issued, then switch it back to **Proxied**.

---

## Zone: `rishabhsingh.me` (old domain)

**Prerequisite:** the domain is on `clientHold` (registration expired 2026-10-04). Nothing below
works until it is renewed at the registrar and resolves again. Its nameservers already point
to Cloudflare (`zita` / `johnny`), so add it as its own zone.

**DNS** (records only exist so that Cloudflare receives the request; the origin is never hit):

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `@` | `192.0.2.1` | Proxied |
| CNAME | `www` | `rishabhsingh.me` | Proxied |

Enable **Always Use HTTPS** in this zone too.

Create the rules **in this order**. The first matching rule wins, so the specific `.html` rule must come first.

### (c1) Legacy `.html` post URLs → new slash URLs (skips the stub hop)

| Field | Value |
|---|---|
| Request URL | `https://*rishabhsingh.me/blog/*.html` |
| Target URL | `https://singhrishabh.com/blog/${2}/` |
| Status code | `301` |
| Preserve query string | ✓ |

### (c2) Everything else → same path on the new domain

| Field | Value |
|---|---|
| Request URL | `https://*rishabhsingh.me/*` |
| Target URL | `https://singhrishabh.com/${2}` |
| Status code | `301` |
| Preserve query string | ✓ |

`*rishabhsingh.me` matches both `rishabhsingh.me` and `www.rishabhsingh.me`. `${1}` is the
`www.` part (or empty) and `${2}` is the path.

## Slug mapping

No slugs changed in the move. Every path maps 1:1, so rule (c2) needs no table. The only
transformation is the legacy `.html` form handled by (c1):

| Old URL | New URL |
|---|---|
| `rishabhsingh.me/` | `singhrishabh.com/` |
| `rishabhsingh.me/blog/` | `singhrishabh.com/blog/` |
| `rishabhsingh.me/blog/<slug>/` | `singhrishabh.com/blog/<slug>/` |
| `rishabhsingh.me/blog/<slug>.html` | `singhrishabh.com/blog/<slug>/` |
| `rishabhsingh.me/privacy/` | `singhrishabh.com/privacy/` |

## Verify

```sh
curl -sI https://www.singhrishabh.com/blog/  | grep -iE '^(HTTP|location)'   # 301 → https://singhrishabh.com/blog/
curl -sI http://singhrishabh.com/            | grep -iE '^(HTTP|location)'   # 301 → https://singhrishabh.com/
# after rishabhsingh.me is renewed:
curl -sI https://rishabhsingh.me/blog/forecasting-in-a-minute.html | grep -iE '^(HTTP|location)'  # 301 → https://singhrishabh.com/blog/forecasting-in-a-minute/
curl -sI 'https://www.rishabhsingh.me/blog/?s=python' | grep -iE '^(HTTP|location)'               # 301 → https://singhrishabh.com/blog/?s=python
```

## Search Console

After the old domain resolves and redirects:
1. Add `rishabhsingh.me` as a **Domain property** in Search Console.
2. **Settings → Change of address** → choose `singhrishabh.com`.
