import '../styles/globals.css';
import PropsTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
  Component: PropsTypes.func,
  pageProps: PropsTypes.object
};