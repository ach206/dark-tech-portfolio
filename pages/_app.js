import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import "/public/style/_settings.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Creative Ambition</title>
        {/* @To-DO: left off with adding this favicon, also trying to fix why fonts look different still */}
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
