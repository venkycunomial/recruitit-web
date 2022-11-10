import { SEO } from '../components/common/seo/Seo';
import { Hero } from '../components/dashboard/Hero';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <>
      <SEO />
      <main className="dark:bg-gray-900">
        <Hero />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
