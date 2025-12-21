'use server';

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function signup(formData: FormData, redirectTo?: string | undefined) {
  await signIn('credentials', formData);

  redirect(redirectTo || '/');
}

export async function logout({
  redirectTo,
}: {
  redirectTo?: string,
}) {
  await signOut({ redirectTo: redirectTo || '/sign-in' })
}