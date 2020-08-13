import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import GenreList from '../../components/GenreList';
import Urls from '../../components/Urls';
import Breadcrumbs from '../../components/Breadcrumbs';
import getNetlabels from '../../utils/getNetlabels';
import parseGenres from '../../utils/parseGenres';
import sluggify from '../../utils/sluggify';
import capitalize from '../../utils/capitalize';

const Netlabel = ({ netlabel }) => {
  const genres = parseGenres([netlabel]);

  return (
    <Layout className="Netlabel" header="inner">
      <Head>
        <link
          rel="canonical"
          href={`https://netlabelguide.com/netlabel/${netlabel.slug}`}
          key="canonical"
        />
        <title>{netlabel.label_name} page — The Netlabel Guide</title>
        <meta
          property="og:url"
          content={`https://netlabelguide.com/netlabel/${netlabel.slug}`}
          key="og-url"
        />
        <meta
          property="og:title"
          content={`${netlabel.label_name} page — The Netlabel Guide`}
          key="og-title"
        />
      </Head>
      <Breadcrumbs
        links={[
          { href: '/netlabels', name: 'Netlabels' },
          { href: `/netlabel/${netlabel.slug}`, name: netlabel.label_name },
        ]}
      />
      <h1>{netlabel.label_name}</h1>
      <Urls urls={netlabel.urls} />
      <GenreList genres={genres} heading />
      <p>
        <strong>Status:</strong> {capitalize(netlabel.activity_state)}
      </p>
    </Layout>
  );
};

export async function getStaticPaths() {
  const netlabels = await getNetlabels();
  const paths = netlabels.map(netlabel => ({
    params: { slug: netlabel.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const netlabels = await getNetlabels();
  let netlabel;

  netlabels.map(n => {
    if (n.label_name && sluggify(n.label_name) === params.slug) {
      netlabel = n;
    }
  });

  return {
    props: {
      netlabel,
    },
  };
}

export default Netlabel;
