import Link from 'next/link';
import ResourceList from './ResourceList';
import resourceData from '../data/resources.json';
import styles from './SpotlightResources.module.scss';

const selected = [
  'netlabel-day',
  'cc-community-music-awards',
  'ccmixter',
  'netlabel-archive',
  'starfrosch-com',
  'netwaves-org',
  'radio-brennpunkt',
  'rynothebearded-oo-top-10',
];

const SpotlightResources = () => {
  const resources = [];

  selected.map(item => {
    resources.push(
      resourceData.resources.filter(resource => {
        if (resource.slug === item) {
          return resource;
        }
      })[0]
    );
  });

  return (
    <div className={styles.SpotlightResources}>
      <h2>Community Resources</h2>
      <ResourceList resources={resources} />
      <p className="center">
        See the{' '}
        <Link href="/resources">
          <strong>complete resource list</strong>
        </Link>{' '}
        for more.
      </p>
    </div>
  );
};

export default SpotlightResources;
