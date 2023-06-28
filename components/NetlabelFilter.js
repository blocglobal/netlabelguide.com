import Link from 'next/link';
import classnames from 'classnames';
import styles from './NetlabelFilter.module.scss';

const NetlabelFilter = ({ status, inputValue, onChange }) => {
  return (
    <ul className={styles.NetlabelFilter}>
      <li>
        <Link
          href="/netlabels?status=active"
          className={status === 'active' && 'strong'}
        >
          Active
        </Link>
      </li>
      <li>
        <Link
          href="/netlabels?status=inactive"
          className={classnames({ strong: status === 'inactive' })}
        >
          Inactive
        </Link>
      </li>
      <li>
        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          aria-label="Filter netlabels"
          placeholder="Filter netlabels"
        />
      </li>
    </ul>
  );
};

export default NetlabelFilter;
