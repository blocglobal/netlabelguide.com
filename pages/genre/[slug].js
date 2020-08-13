import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';
import NetlabelList from '../../components/NetlabelList';
import getNetlabels from '../../utils/getNetlabels';
import parseGenres from '../../utils/parseGenres';
import filterNetlabelsByGenre from '../../utils/filterNetlabelsByGenre';

const Genre = ({ genre, netlabels }) => {
  return (
    <Layout className="Genre" header="inner">
      <Head>
        <link
          rel="canonical"
          href={`https://netlabelguide.com/genre/${genre.slug}`}
          key="canonical"
        />
        <title>{genre.name} page — The Netlabel Guide</title>
        <meta
          property="og:url"
          content={`https://netlabelguide.com/genre/${genre.slug}`}
          key="og-url"
        />
        <meta
          property="og:title"
          content={`${genre.name} page — The Netlabel Guide`}
          key="og-title"
        />
      </Head>
      <Breadcrumbs
        links={[
          { href: '/netlabels', name: 'Netlabels' },
          { href: `/genre/${genre.slug}`, name: genre.name },
        ]}
      />
      <h1>{genre.name}</h1>
      <NetlabelList netlabels={netlabels} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const netlabels = await getNetlabels();
  const genres = parseGenres(netlabels);

  const paths = genres.map(g => ({
    params: { slug: g.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const netlabels = await getNetlabels();
  const genre = parseGenres(netlabels, params.slug);
  const filteredNetlabels = filterNetlabelsByGenre(netlabels, genre.slug);

  return {
    props: {
      genre,
      netlabels: filteredNetlabels,
    },
  };
}

export default Genre;
