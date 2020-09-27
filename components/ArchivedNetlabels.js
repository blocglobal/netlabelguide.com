import urlKeys from '../utils/urlKeys';
import './ArchivedNetlabels.scss';

const ArchivedNetlabels = ({ archived = [] }) => {
  return (
    <div className="ArchivedNetlabels">
      <h2>Archived Netlabels</h2>
      <div className="netlabels">
        {archived.map(netlabel => {
          return (
            <ul key={`netlabel-${netlabel.label_name}`}>
              <li>
                <h3>
                  <a href={netlabel.urls[urlKeys.NETLABEL_ARCHIVE]}>
                    {netlabel.label_name}
                  </a>
                </h3>
              </li>
              {netlabel.countries?.length && (
                <li>
                  <strong>Location:</strong> {netlabel.countries.join(', ')}
                </li>
              )}
              <li>
                <strong>Years Active:</strong> {netlabel.years_active}
              </li>
              <li>
                <strong>Genres:</strong> {netlabel.genres.join(', ')}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ArchivedNetlabels;
