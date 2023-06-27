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

  const letterItems = data.filter(item =>
    itemFirstCharacterMatches(item[testField], character)
  );

  return letterItems.length > 0 ? (
    <div className="CharacterList">
      <HeadingTag>{character.toUpperCase()}</HeadingTag>
      <ul>
        {letterItems.map(item => {
          const listItem = (
            <li key={`${character}-${key}`}>{onRenderItem(item)}</li>
          );
          key = key + 1;

          return listItem;
        })}
      </ul>
    </div>
  ) : null;
};

export default CharacterList;
