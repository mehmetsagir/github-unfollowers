import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyles';
import { Auth0Provider } from '@auth0/auth0-react';
import Layout from 'components/Layout';
import { UserContextProvider } from 'src/hooks/useUser';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Github Unfollowers</title>
        <meta name="description" content="Github unfollowers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Auth0Provider
        domain={String(process.env.NEXT_PUBLIC_DOMAIN)}
        clientId={String(process.env.NEXT_PUBLIC_CLIENT_ID)}
        redirectUri={process.env.NEXT_PUBLIC_URL}
      >
        <UserContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContextProvider>
      </Auth0Provider>
    </>
  );
}

export default MyApp;
