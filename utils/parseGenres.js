import sluggify from './sluggify';

const parseGenres = (netlabels, slug = null) => {
  let genreObject;
  const genres = [];

  netlabels.map(netlabel => {
    netlabel.genres &&
      netlabel.genres.map(g => {
        const slug = sluggify(g);
        let exists = false;

        genres.map(gi => {
          if (gi.slug === slug) {
            exists = true;
          }
        });

        if (!exists) {
          genres.push({ name: g, slug });
        }
      });
  });

  if (slug) {
    genres.map(g => {
      if (g.slug === slug) {
        genreObject = g;
      }
    });

    return genreObject;
  }

  return genres;
};

export default parseGenres;
