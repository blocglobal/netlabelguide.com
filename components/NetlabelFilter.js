import Link from 'next/link';
import './NetlabelFilter.scss';

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
          <a className={status === 'inactive' && 'strong'}>Inactive</a>
        </Link>
      </li>
      <li>
        <input type="text" value={inputValue} onChange={onChange} />
      </li>
    </ul>
  );
};

export default NetlabelFilter;
