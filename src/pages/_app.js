import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Michael Sweat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
