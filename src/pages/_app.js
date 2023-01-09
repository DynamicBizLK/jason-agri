import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Component {...pageProps} />

      <footer>
        <Footer />
      </footer>
    </>
  );
}
