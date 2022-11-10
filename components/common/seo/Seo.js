import React from 'react';
import Head from 'next/head';

import { defaultValues } from '../../../constants/Seo';

export const SEO = (props) => {
  const { title, description, keywords, url, image } = props || {};

  return (
    <Head>

      {/* Title Tag */}
      <title>
        {title && title !== 'undefined'
          ? `RecruitIt | ${title.substring(0, 70)}`
          : defaultValues.meta.title.substring(0, 70)}
      </title>

      {/* charset */}
      <meta charSet="utf-8" />

      {/* content-type */}
      <meta key="Content-Type" httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* X-UA-Compatible */}
      <meta key="X-UA-Compatible" httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />

      {/* Viewport */}
      <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Meta Description */}
      <meta
        key="description"
        name="description"
        content={
          description && description !== 'undefined'
            ? `${description.substring(0, 120)}`
            : defaultValues.meta.description.substring(0, 120)
        }
      />

      {/* Robots Meta Tag */}
      <meta name="robots" content="index, follow" />

      {/* Generator */}
      <meta name="generator" content="Cunomial" />

      {/* keywords */}
      <meta
        key="keywords"
        name="keywords"
        content={keywords && keywords !== 'undefined' ? `${keywords}` : defaultValues.meta.keywords}
      />

      {/* Google Language translate (Google will not provide automatic translation with this tag enabled) */}
      <meta name="googlebot" content="notranslate" />

      {/* Copyright meta tag */}
      <meta name="copyright" content="Cunomial Technologies" />

      {/* msapplication meta */}
      <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#ffc40d" />
      <meta key="msapplication-TileImage" name="msapplication-TileImage" content="mstile-144x144.png" />
      <meta key="msapplication-square70x70logo" name="msapplication-square70x70logo" content="mstile-70x70.png" />
      <meta key="msapplication-square150x150logo" name="msapplication-square150x150logo" content="mstile-150x150.png" />
      <meta key="msapplication-wide310x150logo" name="msapplication-wide310x150logo" content="mstile-310x150.png" />
      <meta key="msapplication-square310x310logo" name="msapplication-square310x310logo" content="mstile-310x310.png" />
      <meta key="theme-color" name="theme-color" content="#ffffff" />

      {/* itemProp name */}
      <meta
        itemProp="name"
        content={
          title && title !== 'undefined' ? `${title.substring(0, 70)}` : defaultValues.meta.title.substring(0, 70)
        }
      />

      {/* itemProp description */}
      <meta
        itemProp="description"
        content={
          description && description !== 'undefined'
            ? `${description.substring(0, 120)}`
            : defaultValues.meta.description.substring(0, 120)
        }
      />

      {/* itemProp image */}
      <meta itemProp="image" content={image && image !== 'undefined' ? `${image}` : defaultValues.og.image} />

      {/* /////////////////////// Twitter meta starts ////////////////////// */}
      {/* twitter card */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      {/* twitter site */}
      <meta key="twitter:site" name="twitter:site" content="@cunomial" />
      {/* twitter title */}
      <meta
        key="twitter:title"
        name="twitter:title"
        content={
          title && title !== 'undefined' ? `${title.substring(0, 70)}` : defaultValues.twitter.title.substring(0, 70)
        }
      />
      {/* twitter description */}
      <meta
        key="twitter:description"
        name="twitter:description"
        content={
          description && description !== 'undefined'
            ? `${description.substring(0, 120)}`
            : defaultValues.twitter.description.substring(0, 120)
        }
      />
      {/* twitter creator */}
      <meta key="twitter:creator" name="twitter:creator" content="@cunomial" />
      {/* twitter image */}
      <meta
        key="twitter:image:src"
        name="twitter:image:src"
        content={image && image !== 'undefined' ? `${image}` : defaultValues.twitter.image}
      />
      {/* /////////////////////// Twitter meta ends ////////////////////// */}

      {/* /////////////////////// Open Graph Meta Starts ////////////////////// */}
      {/* application-name */}
      <meta key="application-name" name="application-name" content="Cunomial" />
      {/* og title */}
      <meta
        key="og:title"
        name="og:title"
        content={title && title !== 'undefined' ? `${title.substring(0, 70)}` : defaultValues.og.title.substring(0, 70)}
      />
      {/* og type */}
      <meta key="og:type" name="og:type" content="" />
      {/* og url */}
      <meta key="og:url" name="og:url" content={url && url !== 'undefined' ? `${url}` : defaultValues.og.url} />
      {/* og image */}
      <meta
        key="og:image"
        name="og:image"
        content={image && image !== 'undefined' ? `${image}` : defaultValues.og.image}
      />
      {/* og description */}
      <meta
        key="og:description"
        name="og:description"
        content={
          description && description !== 'undefined'
            ? `${description.substring(0, 120)}`
            : defaultValues.og.description.substring(0, 120)
        }
      />
      {/* og site_name */}
      <meta key="og:site_name" name="og:site_name" content="Cunomial" />
      {/* og published time */}
      <meta key="og:published_time" name="og:published_time" content={new Date().toISOString()} />
      {/* og modified time */}
      <meta key="og:modified_time" name="og:modified_time" content={new Date().toISOString()} />
      {/* og email */}
      <meta name='og:email' content='sales@cunomial.com' />
      {/* og phone number */}
      <meta name='og:phone_number' content='+91-8770249504' />
      {/* og street-address */}
      <meta name='og:street-address' content='Mantri Elegance' />
      {/* og locality */}
      <meta name='og:locality' content=', Bannergatta Road' />
      {/* og region */}
      <meta name='og:region' content='IN' />
      {/* og postal-code */}
      <meta name='og:postal-code' content='560076' />
      {/* og country-name */}
      <meta name='og:country-name' content='INDIA' />
      {/* /////////////////////// Open Graph Meta Ends ////////////////////// */}

      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/favicon-128.png" sizes="128x128" />
      <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/apple-touch-icon-152x152.png" />

      <link rel="alternate" href="http://cunomial.com" hrefLang="x-default" />
      <link rel="alternate" href="http://cunomial.com" hrefLang="en" />
      <link rel="alternate" href="http://cunomial.com/hi" hrefLang="hi" />
      <link rel="alternate" href="http://cunomial.com/fr" hrefLang="fr" />
      <link rel="alternate" href="http://cunomial.com/ar" hrefLang="ar" />

      {/* Web app manifests */}
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d6efd" />

      {/* Canonical Tag */}
      <link rel="canonical" href="https://www.cunomial.com" />

    </Head>
  );
};
