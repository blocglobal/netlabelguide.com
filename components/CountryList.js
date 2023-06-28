import sluggify from '../utils/sluggify';
import styles from './CountryList.module.scss';

const CountryList = ({ countries }) => {
  return countries && countries.length > 0 ? (
    <div className={styles.CountryList}>
      <h2>{countries.length > 1 ? 'Countries' : 'Country'}</h2>
      <ul>
        {countries.map(country => {
          const slug = sluggify(country);
          return <li key={`country-${slug}`}>{country}</li>;
        })}
      </ul>
    </div>
  ) : null;
};

export default CountryList;
