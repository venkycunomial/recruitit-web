import 'focus-visible'
import '../styles/globals.css'
import Script from 'next/script'
import React from 'react'

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>

      {/* Google Analytics Tagging */}
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id='google-analytics-script' strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
      });
     `}
      </Script>

      {/* Microsoft Clarity Tagging */}
      <script id='microsoft-clarity-script' type="text/javascript" dangerouslySetInnerHTML={
        {
          __html:
            `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ct5aljfrg8");`
        }
      } />

      <Component {...pageProps} />

    </>
  )
}

export default App;