import classnames from 'classnames';
import capitalize from '../utils/capitalize';

const NetlabelHeading = ({ name, status }) => {
  return (
    <div className="NetlabelHeading">
      <h1>{name}</h1>
      <span
        className={classnames('status', { inactive: status === 'inactive' })}
      >
        {capitalize(status)}
      </span>
    </div>
  );
};

export default NetlabelHeading;
