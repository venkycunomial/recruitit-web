import { SEO } from '../components/common/seo/Seo';
import { Hero } from '../components/about/Hero';
import { AboutCunomial } from '../components/about/AboutCunomial';
import { OurJourney } from '../components/about/OurJourney';
import Layout from '../components/layout/Layout';

export default function About() {
  return (
    <>
      <SEO
        title="Industry's Most Comprehensive and Best-in-class Cloud Software"
      />
      <main className="dark:bg-gray-900">
        <Hero />
        <AboutCunomial />
        <OurJourney />
      </main>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
