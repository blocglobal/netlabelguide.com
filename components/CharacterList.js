import './CharacterList.scss';

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
  let key = 0;

  return (
    <div className="CharacterList">
      <HeadingTag>{character.toUpperCase()}</HeadingTag>
      <ul>
        {data.map(item => {
          if (itemFirstCharacterMatches(item[testField], character)) {
            const listItem = (
              <li key={`${character}-${key}`}>{onRenderItem(item)}</li>
            );
            key = key + 1;

            return listItem;
          }
        })}
      </ul>
    </div>
  );
};

export default CharacterList;
