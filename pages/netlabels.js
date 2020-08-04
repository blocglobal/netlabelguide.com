import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import NetlabelList from '../components/NetlabelList';
import NetlabelFilter from '../components/NetlabelFilter';
import getNetlabels from '../utils/getNetlabels';

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
