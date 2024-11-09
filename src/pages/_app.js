import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import { TransitionProvider } from '../context/TransitionContext';

function MyApp({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </div>
    </TransitionProvider>
  );
}

export default MyApp;
