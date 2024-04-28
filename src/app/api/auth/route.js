// Next.js Route Handlers (App Router)
import { cookies } from 'next/header';
import { getIronSession } from 'iron-session';

export function GET() {
  const session = getIronSession(cookies(), { password: "...", cookieName: "..." });
}

export async function POST() {
  const session = getIronSession(cookies(), { password: "...", cookieName: "..." });
  session.username = "Alison";
  await session.save();
}