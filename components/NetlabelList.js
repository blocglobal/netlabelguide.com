import Link from 'next/link';
import CharacterList from './CharacterList';
import styles from './NetlabelList.module.scss';

const chars = '#abcdefghijklmnopqrstuvwxyz';

const NetlabelList = ({ netlabels }) => {
  const handlerRenderItem = item => (
    <Link href={`/netlabel/${item.slug}`}>{item.label_name}</Link>
  );

  return (
    <div className={styles.NetlabelList}>
      {netlabels.length &&
        chars.split('').map(char => {
          return (
            <CharacterList
              key={char}
              character={char}
              data={netlabels}
              testField="label_name"
              HeadingTag="h2"
              onRenderItem={handlerRenderItem}
            />
          );
        })}
      <div className={styles.Credit}>
        <p>
          <strong>List source:</strong>{' '}
          <a href="https://github.com/timpulver/netlabel-list">
            Tim Pulver’s Netlabel List
          </a>
        </p>
        <p>
          If you’d like your netlabel added, please{' '}
          <a href="https://blocsonic.com/contact">contact us here</a> with the
          relevant data.
        </p>
      </div>
    </div>
  );
};

export default NetlabelList;
