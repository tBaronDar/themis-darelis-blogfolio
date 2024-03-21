import Head from "next/head";

import Layout from "../components/layout/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code-64.png" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
