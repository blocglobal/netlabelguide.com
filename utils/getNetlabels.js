import sluggify from './sluggify';

const getNetlabels = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/timpulver/netlabel-list/master/netlabels.json'
  );
  const netlabelData = await res.json();

  return netlabelData.netlabels.filter(netlabel => {
    if (netlabel.label_name) {
      netlabel.slug = sluggify(netlabel.label_name);

      return netlabel;
    }
  });
};

export default getNetlabels;
