'use client';

import { logout } from "@/app/(actions)/auth/actions";
import i18n from "@/libs/i18n/i18n.client";

export default function Logout() {
  const handleSignOut = async () => {
    await logout({ redirectTo: `/${i18n.language}` });
  }

  return (
    <button onClick={handleSignOut}>
      Log - out
    </button>
  )
}