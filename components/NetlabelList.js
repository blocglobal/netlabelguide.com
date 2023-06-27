import Link from 'next/link';
import CharacterList from './CharacterList';

const chars = '#abcdefghijklmnopqrstuvwxyz';

const NetlabelList = ({ netlabels }) => {
  const handlerRenderItem = item => (
    <Link href={`/netlabel/${item.slug}`}>
      <a>{item.label_name}</a>
    </Link>
  );

  return (
    <div className="NetlabelList">
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
      <div className="credit">
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
