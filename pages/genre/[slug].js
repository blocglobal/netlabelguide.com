import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';
import NetlabelList from '../../components/NetlabelList';
import sluggify from '../../utils/sluggify';
import getNetlabels from '../../utils/getNetlabels';

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
  let genres = [];

  netlabels.filter(netlabel => {
    netlabel.genres &&
      netlabel.genres.map(g => genres.indexOf(g) === -1 && genres.push(g));
  });

  const paths = genres.map(g => ({
    params: { slug: sluggify(g) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const netlabels = await getNetlabels();

  let genre;

  netlabels.map(netlabel => {
    netlabel.genres &&
      netlabel.genres.map(g => {
        if (sluggify(g) === params.slug) {
          genre = g;
        }
      });
  });

  const filteredNetlabels = netlabels.filter(netlabel => {
    let hasGenre = false;

    netlabel.genres &&
      netlabel.genres.map(genre => {
        if (sluggify(genre) === params.slug) {
          hasGenre = true;
        }
      });

    return hasGenre;
  });

  return {
    props: {
      genre: {
        name: genre,
        slug: params.slug,
      },
      netlabels: filteredNetlabels,
    },
  };
}

export default Genre;
