import classnames from 'classnames';
import styles from './NetlabelFilter.module.scss';

const NetlabelFilter = ({ status, inputValue, onChange }) => {
  return (
    <ul className={styles.NetlabelFilter}>
      <li>
        <a
          href="/netlabels?status=active"
          className={status === 'active' ? 'strong' : undefined}
        >
          Active
        </a>
      </li>
      <li>
        <a
          href="/netlabels?status=inactive"
          className={classnames({ strong: status === 'inactive' })}
        >
          Inactive
        </a>
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
