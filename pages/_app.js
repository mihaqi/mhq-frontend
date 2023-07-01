import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/header";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Mihaqi | Chinese curtain fabric supplier</title>
				<meta
					name="Mihaqi Textile Co., Ltd"
					content="Mihaqi Textile Co., Ltd. is located in Shaoxing, 
					Zhejiang, China. It is the source manufacturer of home textile series such as curtain fabric, 
					curtain gauze, tablecloth, and curtain accessories. The company has long served countries such as Europe and North America. 
					We welcome samples and pictures for customization."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					name="google-site-verification"
					content="OBDGZzEB964DYqAxQBqUx_uLt7gs_QepsO4u7HMJ8MQ"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<div>
				<Header />
				<Component {...pageProps} />
				<Analytics />
				<Footer />
			</div>
		</>
	);
}
