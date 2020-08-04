import Link from 'next/link';
import truncate from 'truncate';
import capitalize from '../utils/capitalize';
import './ResourceList.scss';

const ResourceList = ({ resources }) => {
  return (
    <div className="ResourceList">
      {resources.map(resource => {
        return (
          <div key={`resource-${resource.slug}`} className="resource">
            <h3>
              <Link href={`/resource/${resource.slug}`}>
                <a>{resource.name}</a>
              </Link>
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
