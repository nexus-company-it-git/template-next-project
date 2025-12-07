export default async function Home({
  params,
}: Readonly<{
  params: { locale: string } | Promise<{ locale: string }>
}>) {
  const resolved = await params;
  const { locale } = resolved;

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen text-white text-bold text-xl">
        <h1>Current locale is &quot;<span className="uppercase">{locale}</span>&quot;</h1>
      </div>
    </>
  )
}