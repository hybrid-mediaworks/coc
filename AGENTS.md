<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

Package manager: pnpm.

- Dev server: `pnpm dev` (http://localhost:3000; needs `WORDPRESS_URL` in `.env`)
- Build: `pnpm build`
- Production server: `pnpm start`
- Dead code check: `pnpm knip` (unused files, exports, and dependencies; config in `knip.json`)
