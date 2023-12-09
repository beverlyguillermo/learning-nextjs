import {getIronSession, IronSession} from "iron-session";
import {defaultSession, SessionData, sessionOptions, sleep} from "@/models/session";
import {cookies} from "next/headers";

export async function GET(): Promise<Response> {

  return Response.json({})
}
