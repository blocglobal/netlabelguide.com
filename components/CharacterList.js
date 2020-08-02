import { Fragment } from 'react';

const itemFirstCharacterMatches = (item, character) => {
  return (
    item.charAt(0).toLowerCase() === character ||
    (character === '#' && !isNaN(item.charAt(0)))
  );
};

const CharacterList = ({
  character,
  data,
  testField,
  HeadingTag = 'h2',
  onRenderItem,
}) => {
  return (
    <Fragment>
      <HeadingTag>{character.toUpperCase()}</HeadingTag>
      <ul>
        {data.map(item => {
          if (itemFirstCharacterMatches(item[testField], character)) {
            return <li>{onRenderItem(item)}</li>;
          }
        })}
      </ul>
    </Fragment>
  );
};

export default CharacterList;
