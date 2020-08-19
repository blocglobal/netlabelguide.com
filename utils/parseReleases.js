import Parser from 'rss-parser';
import axios from 'axios';
import he from 'he';
import cheerio from 'cheerio';
import urlKeys from './urlKeys';

const parseReleases = async netlabel => {
  const parser = new Parser();

  let releases = null;

  if (netlabel.urls && netlabel.urls[urlKeys.RELEASES]) {
    const feed = await parser.parseURL(netlabel.urls[urlKeys.RELEASES]);
    releases = feed.items;
  }

  if (releases === null && netlabel.urls && netlabel.urls[urlKeys.BANDCAMP]) {
    const url = netlabel.urls[urlKeys.BANDCAMP];
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    releases = [];

    $('li.music-grid-item').each((i, el) => {
      const item = $(el).find('a');
      const href = `${url.substring(0, url.length - 1)}${$(item).attr('href')}`;
      const titleAndArtist = $(item).find('.title').html().split('<br>');
      const title = titleAndArtist[0].replace(/\n/g, '').trim();
      const artist = cheerio.load(titleAndArtist[1]).text().trim();

      releases.push({
        title: he.unescape(`${artist} — ${title}`),
        link: href,
      });
    });
  }

  return releases;
};

export default parseReleases;
