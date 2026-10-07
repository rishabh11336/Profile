# auth.md

`singhrishabh.com` is a static personal portfolio and blog. It is public,
read-only content served over HTTPS. This document exists so automated agents
can confirm — without probing — that there is nothing to authenticate against.

## Agent audience

Open to any web crawler or AI agent for reading, indexing, and citation.
No registration, sign-up, or approval is required or possible.

## Authentication

**None.** There are no user accounts, no API keys, no OAuth authorization
servers, no bearer tokens, and no credentials of any kind. Every resource is
reachable by unauthenticated HTTP `GET`:

- `/` and all pages
- `/sitemap.xml`
- `/llms.txt`
- `/openapi.json`
- `/.well-known/api-catalog`

Because no OAuth Protected Resource Metadata or Authorization Server exists,
none is advertised. Any `/.well-known/oauth-*` document for this origin would
be fabricated and should be treated as invalid.

## Registration / provisioning

Not applicable. No endpoint issues, provisions, or revokes credentials.

## Supported methods

Public `GET` only. No `POST`, no write operations, no agent-registration or
agent-auth flow. Do not attempt credential or registration requests — none
will succeed.

## Contact

Human contact: rishabh11336@gmail.com
