export type SignupPayload = {
  login: string;
  password: string;
}

export async function mockSignup(payload: Partial<SignupPayload>) {
  return {
    id: '1',
    name: 'Jogn Doe',
    email: 'john.doe@gmail.com',
  }
}

export async function signup(payload: Partial<SignupPayload>) {

}