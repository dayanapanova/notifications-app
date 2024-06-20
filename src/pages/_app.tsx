import type { AppType, AppProps } from 'next/app';

import { trpc } from '~/utils/trpc';
import '~/styles/globals.css';
import Head from 'next/head';
import Header from '~/components/Header';


const MyApp = (({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Prisma Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen text-black">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}) as AppType;

export default trpc.withTRPC(MyApp);
