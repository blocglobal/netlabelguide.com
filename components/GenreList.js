import styles from './GenreList.module.scss';

const GenreList = ({ genres = [], heading = false }) => {
  return (
    <div className={styles.GenreList}>
      {genres.length > 0 && heading && <h2>Genres</h2>}
      {genres.length > 0 && (
        <ul>
          {genres.map(genre => {
            return (
              <li key={`genres-${genre.slug}`}>
                <a href={`/genre/${genre.slug}`}>{genre.name}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GenreList;
