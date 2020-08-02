import { Fragment } from 'react';
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
    <Fragment>
      {netlabels.length &&
        chars.split('').map(char => {
          return (
            <CharacterList
              character={char}
              data={netlabels}
              testField="label_name"
              HeadingTag="h2"
              onRenderItem={handlerRenderItem}
            />
          );
        })}
    </Fragment>
  );
};

export default NetlabelList;
