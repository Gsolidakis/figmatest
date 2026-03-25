import { HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </HelmetProvider>
  );
}

export default MyApp;
