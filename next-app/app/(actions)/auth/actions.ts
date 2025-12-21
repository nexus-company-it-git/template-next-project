'use server';

import { signIn, signOut } from "@/auth";

export async function signup(formData: FormData, redirectTo?: string | undefined) {
  await signIn('credentials', ({ email: formData.get('email'), password: formData.get('password'), redirectTo }));
}

export async function logout({
  redirectTo,
}: {
  redirectTo?: string,
}) {
  await signOut({ redirectTo: redirectTo || '/sign-in' })
}