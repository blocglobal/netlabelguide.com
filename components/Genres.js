import Link from 'next/link';
import sluggify from '../utils/sluggify';
import './Genres.scss';

const Genres = ({ genres }) => {
  return (
    <div className="Genres">
      <h2>Genres</h2>
      {genres.length > 0 && (
        <ul>
          {genres.map(genre => {
            const slug = sluggify(genre);
            return (
              <li key={`genres-${slug}`}>
                <Link href={`/genre/${slug}`}>
                  <a>{genre}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Genres;
