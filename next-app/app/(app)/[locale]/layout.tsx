import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { Locale } from '@/libs/common';
import LocaleDetector from '@/components/LocaleDetector';
import '../globals.css';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}>) {
  const session = await auth();
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SessionProvider session={session}>
          <pre>
            {JSON.stringify(session)}
          </pre>
          <LocaleDetector locale={locale as unknown as Locale} />

          <main>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
