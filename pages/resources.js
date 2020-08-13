import Head from 'next/head';
import Layout from '../components/Layout';
import ResourceList from '../components/ResourceList';
import Breadcrumbs from '../components/Breadcrumbs';
import resourceData from '../data/resources.json';

const resources = resourceData.resources;

const Resources = ({ resources }) => {
  return (
    <Layout header="inner" className="Resources" title="Resources">
      <Head>
        <link
          rel="canonical"
          href="https://netlabelguide.com/resources"
          key="canonical"
        />
        <title>Resource List — The Netlabel Guide</title>
        <meta
          property="og:url"
          content="https://netlabelguide.com/resources"
          key="og-url"
        />
        <meta
          property="og:title"
          content="Resource List — The Netlabel Guide"
          key="og-title"
        />
      </Head>
      <Breadcrumbs links={[{ href: '/resources', name: 'Resources' }]} />
      <h1>Resources</h1>
      <ResourceList resources={resources} />
      <p className="center">
        If there’s a resource you’d like to see added to this list,{' '}
        <a href="https://blocsonic.com/contact">
          please contact us with the relevant information
        </a>
        .
      </p>
    </Layout>
  );
};

function compare(a, b) {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;

  return 0;
}

export async function getStaticProps() {
  const r = resources.sort(compare);

  return {
    props: {
      resources: r,
    },
  };
}

export default Resources;
