import Head from 'next/head';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import NetlabelList from '../components/NetlabelList';
import getNetlabels from '../utils/getNetlabels';

const Netlabels = ({ netlabels }) => {
  return (
    <Layout header="inner" className="Netlabels" title="Netlabels">
      <Head>
        <link
          rel="canonical"
          href="https://netlabelguide.com/netlabels"
          key="canonical"
        />
        <title>Netlabels</title>
        <meta
          property="og:url"
          content="https://netlabelguide.com/netlabels"
          key="og-url"
        />
        <meta
          property="og:title"
          content="The Netlabel Guide Netlabel List"
          key="og-title"
        />
      </Head>
      <Breadcrumbs links={[{ href: '/netlabels', name: 'Netlabels' }]} />
      <h1>Netlabels</h1>
      <NetlabelList netlabels={netlabels} />
    </Layout>
  );
};

function compareNetlabels(a, b) {
  if (a.label_name.toLowerCase() > b.label_name.toLowerCase()) return 1;
  if (b.label_name.toLowerCase() > a.label_name.toLowerCase()) return -1;

  return 0;
}

export async function getStaticProps() {
  let netlabels = await getNetlabels();

  netlabels = netlabels.sort(compareNetlabels);

  return {
    props: {
      netlabels,
    },
  };
}

export default Netlabels;
