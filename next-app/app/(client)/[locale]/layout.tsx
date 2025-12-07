import { Locale } from '@/libs/common';
import LocaleDetector from '@/app/components/LocaleDetector';
import '../globals.css';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  return (
    <html lang="en">
      <body>

        <LocaleDetector locale={locale as unknown as Locale} />

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
