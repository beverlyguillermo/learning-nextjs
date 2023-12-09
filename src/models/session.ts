import { SessionOptions } from "iron-session"

export interface SessionData {
  username: string
  isLoggedIn: boolean
}

export const defaultSession: SessionData = {
  username: "",
  isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_SECRET || "",
  cookieName: process.env.IRON_SESSION_COOKIE_NAME || "_web_app",
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    domain: process.env.IRON_SESSION_COOKIE_DOMAIN || "localhost",
    secure: process.env.IRON_SESSION_COOKIE_SECURE == "true",
  },
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
