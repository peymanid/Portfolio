import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="transition-all duration-[400ms] bg-[#d8d8d8f9] dark:bg-[#130a14]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
