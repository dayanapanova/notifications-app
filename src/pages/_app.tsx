import type { AppType, AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '~/styles/globals.css';

import { trpc } from '~/utils/trpc';
import Head from 'next/head';
import { Header } from '~/components/Header';
import { CreateNotificationForm } from '~/components/CreateNotificationForm';
import { CreateUserForm } from '~/components/CreateUserForm';
import { ModalProvider } from '~/components/ModalContext';

const MyApp = (({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Notify App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModalProvider>
        <main className="text-black mt-14">
          <Header />
          <Component {...pageProps} />
          <CreateNotificationForm />
          <CreateUserForm />
          <ToastContainer position="bottom-right" />
        </main>
      </ModalProvider>
    </>
  );
}) as AppType;

export default trpc.withTRPC(MyApp);
