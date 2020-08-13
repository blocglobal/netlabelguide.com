import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';
import GenreList from '../../components/GenreList';
import Layout from '../../components/Layout';
import getNetlabels from '../../utils/getNetlabels';
import parseGenres from '../../utils/parseGenres';

const Genres = ({ genres }) => {
  return (
    <Layout header="inner" className="Genres" title="Genres">
      <Head>
        <link
          rel="canonical"
          href="https://netlabelguide.com/genres"
          key="canonical"
        />
        <title>Genre List — The Netlabel Guide</title>
        <meta
          property="og:url"
          content="https://netlabelguide.com/genres"
          key="og-url"
        />
        <meta
          property="og:title"
          content="Genre List — The Netlabel Guide"
          key="og-title"
        />
      </Head>
      <Breadcrumbs
        links={[
          { href: '/netlabels', name: 'Netlabels' },
          { href: '/netlabels/genres', name: 'Genres' },
        ]}
      />
      <h1>Genres</h1>
      <GenreList genres={genres} />
    </Layout>
  );
};

function compareGenres(a, b) {
  if (a.slug > b.slug) return 1;
  if (b.slug > a.slug) return -1;

  return 0;
}

export async function getStaticProps() {
  const genres = parseGenres(await getNetlabels()).sort(compareGenres);

  return {
    props: {
      genres,
    },
  };
}

export default Genres;
