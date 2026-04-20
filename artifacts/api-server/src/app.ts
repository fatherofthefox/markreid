import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";
import { pool } from "@workspace/db";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PgSession = connectPgSimple(session);

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET environment variable must be set");
}

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return { id: req.id, method: req.method, url: req.url?.split("?")[0] };
      },
      res(res) {
        return { statusCode: res.statusCode };
      },
    },
  }),
);

app.use(cors({
  origin: process.env.CORS_ORIGIN ?? true,
  credentials: true,
}));

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  store: new PgSession({ pool, tableName: "sessions", createTableIfMissing: true }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  name: "sid",
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 8 * 60 * 60 * 1000, // 8 hours
  },
}));

// Serve uploaded media statically
const uploadsDir = path.resolve(__dirname, "../uploads");
app.use("/uploads", express.static(uploadsDir, {
  dotfiles: "deny",
  setHeaders(res) {
    res.set("X-Content-Type-Options", "nosniff");
    res.set("Cache-Control", "public, max-age=31536000");
  },
}));

app.use("/api", router);

// In production serve the built React frontend and let the SPA handle routing
if (process.env.NODE_ENV === "production") {
  const frontendDist = path.resolve(__dirname, "../../mark-reid-site/dist");
  app.use(express.static(frontendDist, { maxAge: "1y", index: false }));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

export default app;
