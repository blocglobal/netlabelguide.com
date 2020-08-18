import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import sluggify from '../utils/sluggify';
import './ReleaseList.scss';

dayjs.extend(advancedFormat);

const ReleaseList = ({ releases }) => {
  return releases ? (
    <div className="ReleaseList">
      <h2>Recent Releases</h2>
      <ul>
        {releases.map(release => {
          const slug = sluggify(release.title);
          return (
            <li key={`release-${slug}`}>
              <a href={release.link}>{release.title}</a> —{' '}
              {dayjs(release.pubDate).format('MMMM Do, YYYY')}
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};

export default ReleaseList;
