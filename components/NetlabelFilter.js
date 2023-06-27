import Link from 'next/link';
import classnames from 'classnames';

const NetlabelFilter = ({ status, inputValue, onChange }) => {
  return (
    <ul className="NetlabelFilter">
      <li>
        <Link href="/netlabels?status=active">
          <a className={status === 'active' && 'strong'}>Active</a>
        </Link>
      </li>
      <li>
        <Link href="/netlabels?status=inactive">
          <a className={classnames({ strong: status === 'inactive' })}>
            Inactive
          </a>
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
