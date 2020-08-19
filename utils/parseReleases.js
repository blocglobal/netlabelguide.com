import Parser from 'rss-parser';
import axios from 'axios';
import he from 'he';
import dayjs from 'dayjs';
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
    let $ = cheerio.load(res.data);

    releases = [];
    let promises = [];

    $('li.music-grid-item').each((i, el) => {
      const item = $(el).find('a');
      const href = `${url.substring(0, url.length - 1)}${$(item).attr('href')}`;
      const titleAndArtist = $(item).find('.title').html().split('<br>');
      let title = titleAndArtist[0].replace(/\n/g, '').trim();

      let artist;

      if (titleAndArtist.length > 1) {
        artist = cheerio.load(titleAndArtist[1]).text().trim();
      } else {
        artist = netlabel.label_name;
      }

      promises.push(axios.get(href));

      releases.push({
        title: he.unescape(`${artist} — ${title}`),
        link: href,
      });
    });

    if (promises.length > 0) {
      await Promise.all(promises).then(responses => {
        responses.map(response => {
          releases.map(release => {
            if (release.link === response.config.url) {
              let $ = cheerio.load(response.data);
              const pubDate = $('meta[itemprop="datePublished"]').attr(
                'content'
              );
              release.pubDate = dayjs(pubDate).format(
                `ddd, DD MMM YYYY 00:00:00 +0000`
              );
            }
          });
        });
      });
    }
  }

  return releases;
};

export default parseReleases;
