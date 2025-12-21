
import { signup } from "@/app/(actions)/auth/actions";

export type SigninFormProps = {
  redirectTo?: string;
}

export default function SigninForm({
  redirectTo,
}: SigninFormProps) {
  return (
    <>
      <div className="flex flex-col justify-start gap-8 min-w-60 min-h-75 m-auto px-12 py-8 bg-[#141414] border border-white rounded-xl">
        <h1
          className="text-4xl text-center text-white font-black"
        >
          Sign - In
        </h1>
        <h3
          className="text-md text-center text-gray-300 font-medium"
        >
          Welcome user, please sign in to continue
        </h3>

        <form
          className="flex flex-1 flex-col justify-start items center gap-8"
          action={async (formData) => await signup(formData, redirectTo)}
        >
          <input
            className="px-3 py-2 hover:[#222222] border border-white rounded-md transition-all"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            className="px-3 py-2 hover:[#222222] border border-white rounded-md transition-all"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            className="px-2 py-3 text-white hover:bg-[#222222] border border-white rounded-md transition-all cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  )
}