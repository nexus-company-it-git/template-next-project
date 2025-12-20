import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <>
      <h1>Public</h1>

      <form action={async (formData) => {
        'use server';
        
        await signIn('credentials', {
            email: formData.get('login'),
            password: formData.get('password'),
            redirect: false,
          });

        redirect('/private');
      }}>
        <input type="text" name="login" id="" placeholder="Login" />
        <input type="password" name="password" id="" placeholder="Password" />
        <button type="submit">Log - In</button>
      </form>
    </>
  )
}