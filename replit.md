# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **Build**: esbuild (API server), Vite (frontend)

## Artifacts

### API Server (`artifacts/api-server`)
- **Kind**: api (Express 5)
- **Port**: 8080
- **Auth**: bcryptjs passwords, express-session (pg-backed), optional TOTP MFA via otplib
- **Rate limiting**: 10 req/15min on auth, 120 req/min globally
- **File uploads**: multer → `artifacts/api-server/uploads/`, served at `/uploads/`
- **Routes**:
  - `GET /api/health` — health check
  - `POST /api/auth/login` — login (supports MFA)
  - `POST /api/auth/logout`
  - `GET /api/auth/me`
  - `POST /api/auth/mfa/setup|enable|disable`
  - `POST /api/auth/forgot-password|reset-password`
  - `GET /api/public/posts` — published blog posts
  - `GET /api/public/posts/:slug`
  - `GET /api/public/frameworks`
  - `GET|POST|PUT|DELETE /api/admin/posts` (auth required)
  - `GET|POST|PUT|DELETE /api/admin/frameworks` (auth required)
  - `GET|PUT /api/admin/content/:section` (auth required)
  - `GET|POST|DELETE /api/admin/media` (auth required)

### Mark Reid - Personal Website (`artifacts/mark-reid-site`)
- **Kind**: react-vite
- **Preview path**: `/`
- **Vite proxy**: `/api` and `/uploads` → `http://localhost:8080`
- **Purpose**: Mark Reid's personal website at markreid.online
- **Public pages**: Home, About, Tech & AI, Frameworks, Advisory, Content, Blog
- **Admin pages** (at `/admin/*`, require auth session):
  - `/admin/login` — login with optional MFA step
  - `/admin/dashboard` — overview with stats
  - `/admin/blog` — post list + `/admin/blog/new` + `/admin/blog/:id` editor
  - `/admin/frameworks` — framework list + new/edit
  - `/admin/media` — media library with drag-and-drop upload
  - `/admin/security` — MFA setup/enable/disable
- **Design**: Dark, premium — near-black, gold and blue accents, Playfair Display + Inter

### Canvas / Mockup Sandbox (`artifacts/mockup-sandbox`)
- **Kind**: design (Vite)
- **Port**: 8081

## Database Schema

Tables (in `lib/db/src/schema/`):
- `admin_users` — email, passwordHash, mfaEnabled, mfaSecret
- `blog_posts` — title, slug, excerpt, body, coverImage, published, readTime
- `frameworks` — slug, title, category, description, details, letters (jsonb), sortOrder
- `content_sections` — section, key, value (key-value CMS)
- `media` — filename, originalName, mimeType, size, path, url
- `password_reset_tokens` — userId, tokenHash, expiresAt, used

## First-run Admin Setup

```bash
# Create initial admin user (run once)
cd artifacts/api-server
PASSWORD="YourSecurePassword" EMAIL="admin@markreid.online" pnpm dlx tsx src/scripts/seed-admin.ts
```

Default credentials: `admin@markreid.online` / `Admin@MarkReid2026!`

## Environment Variables

- `DATABASE_URL` — PostgreSQL connection string (provisioned)
- `SESSION_SECRET` — Express session secret (set in Replit secrets)
- `CORS_ORIGIN` — Optional: restrict CORS to specific origin
- `NODE_ENV` — `development` or `production`
- `PORT` — Port for each artifact (assigned by Replit)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/mark-reid-site run dev` — run personal website locally

## Important Notes

- `otplib` and `qrcode` are CJS-only packages — loaded via `createRequire` in auth.ts
- Both are in esbuild's externals list so they're loaded at runtime, not bundled
- Session cookies: httpOnly, sameSite lax, 8hr maxAge, secure in production
- Password reset tokens are logged to console in dev; production needs nodemailer SMTP wiring
- Blog and frameworks pages use live DB data when available, fall back to hardcoded content
