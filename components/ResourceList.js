import Link from 'next/link';
import truncate from 'truncate';
import capitalize from '../utils/capitalize';
import styles from './ResourceList.module.scss';

const ResourceList = ({ resources }) => {
  return (
    <div className={styles.ResourceList}>
      {resources.map(resource => {
        return (
          <div key={`resource-${resource.slug}`} className={styles.Resource}>
            <h3>
              <Link href={`/resource/${resource.slug}`}>{resource.name}</Link>
            </h3>
            <p>{truncate(resource.description, 100)}</p>
            <p>
              <strong>Type:</strong> {capitalize(resource.type)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ResourceList;
