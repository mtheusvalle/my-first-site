import Head from "next/head";
import Menu from "../components/Menu/menu";
import Footer from "../components/Footer/footer";
import Destaques from "../components/Destaques/destaques";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <Menu />
      </header>

      <main className="flex-shrink-0">
        {/* <Destaques {...pageProps} /> */}
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}

export default MyApp;
