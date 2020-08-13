import sluggify from './sluggify';

const filterNetlabelsByGenre = (netlabels, genreSlug) => {
  return netlabels.filter(netlabel => {
    let hasGenre = false;

    netlabel.genres &&
      netlabel.genres.map(g => {
        if (sluggify(g) === genreSlug) {
          hasGenre = true;
        }
      });

    return hasGenre;
  });
};

export default filterNetlabelsByGenre;
