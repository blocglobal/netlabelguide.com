import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';
import NetlabelList from '../../components/NetlabelList';
import NetlabelFilter from '../../components/NetlabelFilter';
import getNetlabels from '../../utils/getNetlabels';

const filter = (netlabels, status, filter = null) => {
  return netlabels.filter(netlabel => {
    if (filter !== '') {
      return netlabel.label_name.toLowerCase().includes(filter.toLowerCase());
    } else {
      return netlabel.activity_state === status;
    }
  });
};

const Netlabels = ({ netlabels }) => {
  const router = useRouter();
  const status = router.query.status ? router.query.status : 'active';
  const [filterVal, setFilterVal] = useState('');

  const description =
    'Explore the world of netlabels with our comprehensive guide! Dive into a curated directory of free music labels, discover new artists, and download amazing tracks across a variety of genres. Your go-to resource for all things netlabel!';

  return (
    <Layout header="inner" className="Netlabels" title="Netlabels">
      <Head>
        <link
          rel="canonical"
          href="https://netlabelguide.com/netlabels"
          key="canonical"
        />
        <title>Netlabels: The Netlabel List — The Netlabel Guide</title>
        <meta
          property="og:url"
          content="https://netlabelguide.com/netlabels"
          key="og-url"
        />
        <meta
          property="og:title"
          content="Netlabels: The Netlabel List — The Netlabel Guide"
          key="og-title"
        />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
      </Head>
      <Breadcrumbs links={[{ href: '/netlabels', name: 'Netlabels' }]} />
      <h1>Netlabels</h1>
      <p>
        Netlabels are independent online music labels that distribute music
        digitally, often for free or under Creative Commons licenses. They
        provide a platform for artists to share their work directly with
        listeners, offering fresh sounds and fostering global music communities.
        Explore our directory to discover unique labels and dive into a world of
        innovative music!
      </p>
      <NetlabelFilter
        status={status}
        inputValue={filterVal}
        onChange={e => setFilterVal(e.target.value)}
      />
      <NetlabelList netlabels={filter(netlabels, status, filterVal)} />
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
