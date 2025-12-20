'use server';

import 'server-only';
import { SESSION_SECRET } from './constants';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { cache } from 'react';

const encodeKey = new TextEncoder().encode(SESSION_SECRET);

export async function encrypt(payload: Record<string, string>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encodeKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodeKey, {
      algorithms: ['HS256'],
    });

    return payload;
  } catch {
    return undefined;
  }
}

export async function createSession(userData: Record<string, string>) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ ...userData })
  const cookieStore = await cookies()
 
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
 
  if (!session?.userId) {
    return undefined;
  }
 
  return { isAuth: true, userId: session.userId }
})

export async function deleteSession() {
  const cookieStore = await cookies()
  
  cookieStore.delete('session');
}