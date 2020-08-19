import Parser from 'rss-parser';
import urlKeys from './urlKeys';

const parseReleases = async netlabel => {
  const parser = new Parser();

  let releases = null;

  if (netlabel.activity_state === 'active') {
    if (netlabel.urls && netlabel.urls[urlKeys.RELEASES]) {
      const feed = await parser.parseURL(netlabel.urls[urlKeys.RELEASES]);
      releases = feed.items;
    }
  }

  return releases;
};

export default parseReleases;
