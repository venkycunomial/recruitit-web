import { SEO } from '../components/common/seo/Seo';
import { CallToAction } from '../components/contact/CallToAction';
import { TopLayout } from '../components/contact/TopLayout';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from '../components/layout/Layout';

export default function Contact() {
  return (
    <>
      <SEO title="Contact" />
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
        <main className="dark:bg-gray-900">
          <TopLayout />
          <CallToAction />
        </main>
      </GoogleReCaptchaProvider>
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout >
      {page}
    </Layout>
  )
}