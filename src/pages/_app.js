import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';
import { BsBorderAll } from 'react-icons/bs';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Head>
        <title>Michael Sweat</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Sidebar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
