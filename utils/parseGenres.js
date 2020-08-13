import sluggify from './sluggify';

const parseGenres = (netlabels, slug = null) => {
  let genreObject;
  let genres = [];

  netlabels.map(netlabel => {
    netlabel.genres &&
      netlabel.genres.map(
        g =>
          genres.indexOf(g) === -1 &&
          genres.push({ name: g, slug: sluggify(g) })
      );
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
