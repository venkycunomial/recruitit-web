import { SEO } from '../components/common/seo/Seo';
import { Hero } from '../components/refunds-cancellations/Hero';
import { Content } from '../components/refunds-cancellations/Content';
import Layout from '../components/layout/Layout';

export default function RefundsCancellations() {
  return (
    <>
      <SEO title="Returns & Cancellations Policy" />
      <main className="dark:bg-gray-900">
        <Hero />
        <Content />
      </main>
    </>
  );
}

RefundsCancellations.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}