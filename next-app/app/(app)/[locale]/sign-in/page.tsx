'use client';

import SigninForm from "@/components/SigninForm";
import i18n from "@/libs/i18n/i18n.client";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SigninForm
        redirectTo={`/${i18n.language}/private`}
      />
    </div>
  )
}