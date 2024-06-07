import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Lucia España</title>
        <meta
          name="description"
          content="Hi! I am Lucia. I am a Front End Developer. This is my portfolio. Here you can download my CV and find some of my projects"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
