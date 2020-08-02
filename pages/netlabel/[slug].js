import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import getNetlabels from "../../utils/getNetlabels";
import sluggify from "../../utils/sluggify";

const Netlabel = ({ netlabel }) => {
  return (
    <Layout className="Netlabel" title={netlabel.label_name}>
      <Head>
        <link
          rel="canonical"
          href={`https://netlabelguide.com/netlabel/${netlabel.slug}`}
          key="canonical"
        />
        <title>{netlabel.label_name}</title>
      </Head>
      {netlabel.urls &&
        Object.values(netlabel.urls).map((url) => {
          return (
            <p>
              <a href={url}>{url}</a>
            </p>
          );
        })}
      <p>
        <strong>Activity:</strong> {netlabel.activity_state}
      </p>
    </Layout>
  );
};

export async function getStaticPaths() {
  const netlabels = await getNetlabels();
  const paths = netlabels.map((netlabel) => ({
    params: { slug: netlabel.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const netlabels = await getNetlabels();
  let netlabel;

  netlabels.map((n) => {
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
