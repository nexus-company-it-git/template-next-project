export type Locale = string;

export type Translation = {
  translation: Record<string, string>
};

export type SignupPayload = {
  email: string;
  password: string;
}