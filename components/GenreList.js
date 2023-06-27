import Link from 'next/link';

const GenreList = ({ genres = [], heading = false }) => {
  return (
    <div className="GenreList">
      {genres.length > 0 && heading && <h2>Genres</h2>}
      {genres.length > 0 && (
        <ul>
          {genres.map(genre => {
            return (
              <li key={`genres-${genre.slug}`}>
                <Link href={`/genre/${genre.slug}`}>
                  <a>{genre.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GenreList;
