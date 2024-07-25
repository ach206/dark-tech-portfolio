import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import "/public/style/_settings.scss";
let metaContext = (
	<>
		<meta
			name="description"
			content="We deliver intelligent software that empowers users and delivers exceptional value"
		/>
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://creativeambition.net/" />
		<meta
			property="og:title"
			content="Creative Ambition | We build software using AI."
		/>
		<meta
			property="og:description"
			content="We deliver intelligent software that empowers users and delivers exceptional value"
		/>
		<meta property="og:image" content="/images/ideas-to-reality-thick-banner-2048x1152.png" />
		<meta property="og:site_name" content="Unshackle" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:url" content="https://creativeambition.net/" />
		<meta
			name="twitter:title"
			content="Creative Ambition | We build software using AI."
		/>
		<meta
			name="twitter:description"
			content="We deliver intelligent software that empowers users and delivers exceptional value"
		/>
		<meta name="twitter:image" content="/images/ideas-to-reality-thick-banner-2048x1152.png" />
		<meta name="msapplication-TileColor" content="#ffffff" />
		<meta name="theme-color" content="#ffffff" />
	</>
);
function MyApp({ Component, pageProps }) {
  return (
		<Fragment>
			<Head>
				<title>Creative Ambition</title>
				{/* @To-DO: left off with adding this favicon, also trying to fix why fonts look different still */}
				<link rel="shortcut icon" href="/images/favicons/favicon.ico" />
				{metaContext}
			</Head>
			<Component {...pageProps} />
		</Fragment>
  );
}

export default MyApp;
