import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';

class CustomDocument extends Document {
	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon/favicon-16x16.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon/favicon-32x32.png"
					/>
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
					<link rel="shortcut icon" href="/favicon/favicon.ico" />
					<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
					<meta name="msapplication-TileColor" content="#00aba9" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="description" content="Simple online bookstore" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
