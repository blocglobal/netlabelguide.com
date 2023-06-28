import classnames from 'classnames';
import capitalize from '../utils/capitalize';
import styles from './NetlabelHeading.module.scss';

const NetlabelHeading = ({ name, status }) => {
  return (
    <div className={styles.NetlabelHeading}>
      <h1>{name}</h1>
      <span
        className={classnames(
          styles.status,
          status === 'inactive' && styles.inactive
        )}
      >
        {capitalize(status)}
      </span>
    </div>
  );
};

export default NetlabelHeading;
