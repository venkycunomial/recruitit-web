import { SEO } from '../components/common/seo/Seo';
import { Hero } from '../components/security/Hero';
import { Content } from '../components/security/Content';
import Layout from '../components/layout/Layout';

export default function Security() {
  return (
    <>
      <SEO title="Security Policy" />
      <main className="dark:bg-gray-900">
        <Hero />
        <Content />
      </main>
    </>
  );
}

Security.getLayout = function (page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}