import { Locale } from '@/libs/types';
import LocaleDetector from '@/components/LocaleDetector';
import { auth } from '@/auth';
import Logout from '@/components/Logout';
import Link from 'next/link';

export default async function LocaleLayout({
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
    <>
      <LocaleDetector locale={locale as unknown as Locale} />
      
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>

          {session ? (
            <Logout />
          ) : (
            <>
              <Link href={`/${locale}/sign-in`}>
                Sign - In
              </Link>
            </>
          )}

          <main>
            {children}
          </main>
        </body>
      </html>
    </>
  );
}
