import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import CountryList from '../../components/CountryList';
import GenreList from '../../components/GenreList';
import ReleaseList from '../../components/ReleaseList';
import NetlabelHeading from '../../components/NetlabelHeading';
import Urls from '../../components/Urls';
import Breadcrumbs from '../../components/Breadcrumbs';
import getNetlabels from '../../utils/getNetlabels';
import parseGenres from '../../utils/parseGenres';
import parseReleases from '../../utils/parseReleases';
import sluggify from '../../utils/sluggify';

const Netlabel = ({ netlabel, releases }) => {
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
      <NetlabelHeading
        name={netlabel.label_name}
        status={netlabel.activity_state}
      />
      {netlabel.description && <p>{netlabel.description}</p>}
      <Urls urls={netlabel.urls} />
      <CountryList countries={netlabel.countries} />
      <GenreList genres={genres} heading />
      <ReleaseList releases={releases} />
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

  const releases = await parseReleases(netlabel);

  return {
    props: {
      netlabel,
      releases,
    },
  };
}

export default Netlabel;
