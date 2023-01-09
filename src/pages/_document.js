import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet" />

        <link href="/logo.svg" rel="icon" />
        <link href="/logo.svg" rel="shortcut icon" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Jason Agri Exports (PVT) Limited | Your Supply. Our Responsibility." />
        <meta
          name="description"
          content="Jason Agri Exports (PVT) Limited is more than a one-stop solution provider. We offer wide range of services to our customers and manufactures to meet their needs along the agri supply chain including production of Vegetables, Fruits, Herbs, Spices and similar items."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jasonagri.com" />
        <meta property="og:title" content="Jason Agri Exports (PVT) Limited | Your Supply. Our Responsibility." />
        <meta
          property="og:description"
          content="Jason Agri Exports (PVT) Limited is more than a one-stop solution provider. We offer wide range of services to our customers and manufactures to meet their needs along the agri supply chain including production of Vegetables, Fruits, Herbs, Spices and similar items."
        />
        <meta property="og:image" content="/logo.svg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jasonagri.com" />
        <meta property="twitter:title" content="Jason Agri Exports (PVT) Limited | Your Supply. Our Responsibility." />
        <meta
          property="twitter:description"
          content="Jason Agri Exports (PVT) Limited is more than a one-stop solution provider. We offer wide range of services to our customers and manufactures to meet their needs along the agri supply chain including production of Vegetables, Fruits, Herbs, Spices and similar items."
        />
        <meta property="twitter:image" content="/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
