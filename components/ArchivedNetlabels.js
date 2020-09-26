import './ArchivedNetlabels.scss';

const ArchivedNetlabels = ({ archived = [] }) => {
  return (
    <div className="ArchivedNetlabels">
      <h2>Archived Netlabels</h2>
      <div className="netlabels">
        {archived.map(netlabel => {
          return (
            <ul key={`netlabel-${netlabel.name}`}>
              <li>
                <h3>
                  <a href={netlabel.url}>{netlabel.name}</a>
                </h3>
              </li>
              {netlabel.location && (
                <li>
                  <strong>Location:</strong> {netlabel.location}
                </li>
              )}
              <li>
                <strong>Years Active:</strong> {netlabel.active}
              </li>
              <li>
                <strong>Genres:</strong> {netlabel.genres}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ArchivedNetlabels;
