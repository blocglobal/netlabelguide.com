import HappeningList from './HappeningList';
import './CommunityHappenings.scss';

const CommunityHappenings = () => {
  return (
    <div className="CommunityHappenings">
      <h2>Community Happenings</h2>

      <HappeningList />

      <p>
        Do you have a <em>happening</em> that you’d like added?{' '}
        <a href="https://blocsonic.com/contact">Contact us</a> and let us know
        the details.
      </p>
    </div>
  );
};

export default CommunityHappenings;
