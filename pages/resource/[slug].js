import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import capitalize from '../../utils/capitalize';
import resourceData from '../../data/resources.json';
import Breadcrumbs from '../../components/Breadcrumbs';
import Urls from '../../components/Urls';
import ArchivedNetlabels from '../../components/ArchivedNetlabels';
import getNetlabels from '../../utils/getNetlabels';
import filterNetlabelsByNetlabelArchive from '../../utils/filterNetlabelsByNetlabelArchive';

const resources = resourceData.resources;

const Resource = ({ resource, netlabels = null }) => {
  return (
    <Layout className="Resource" header="inner">
      <Head>
        <link
          rel="canonical"
          href={`https://netlabelguide.com/resource/${resource.slug}`}
          key="canonical"
        />
        <title>{resource.name} page — The Netlabel Guide</title>
        <meta
          property="og:url"
          content={`https://netlabelguide.com/resource/${resource.slug}`}
          key="og-url"
        />
        <meta
          property="og:title"
          content={`${resource.name} page — The Netlabel Guide`}
          key="og-title"
        />
      </Head>
      <Breadcrumbs
        links={[
          { href: '/resources', name: 'Resources' },
          { href: `/resource/${resource.slug}`, name: resource.name },
        ]}
      />
      <h1>{resource.name}</h1>
      <p>
        <strong>Type:</strong> {capitalize(resource.type)}
      </p>
      <p>{resource.description}</p>
      <Urls urls={resource.urls} />
      {netlabels && <ArchivedNetlabels archived={netlabels} />}
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = resources.map(resource => ({
    params: { slug: resource.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let resource;
  let props = {};

  resources.map(r => {
    if (r.slug === params.slug) {
      resource = r;
    }
  });

  props.resource = resource;

  if (resource.slug === 'netlabel-archive') {
    let netlabels = await getNetlabels();
    props.netlabels = filterNetlabelsByNetlabelArchive(netlabels);
  }

  return {
    props: props,
  };
}

export default Resource;
