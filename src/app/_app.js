// pages/_app.js
import { appWithTranslation } from '../i18n';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
