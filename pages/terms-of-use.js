import { SEO } from '../components/common/seo/Seo';
import { Hero } from '../components/terms-of-use/Hero';
import { Content } from '../components/terms-of-use/Content';
import Layout from '../components/layout/Layout';

export default function TermsOfUse() {
  return (
    <>
      <SEO title="Terms of Use" />
      <main className="dark:bg-gray-900">
        <Hero />
        <Content />
      </main>
    </>
  );
}

TermsOfUse.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}