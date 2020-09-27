import urlKeys from './urlKeys';

const filterNetlabelsByNetlabelArchive = netlabels => {
  return netlabels.filter(netlabel => {
    return netlabel.urls && netlabel.urls[urlKeys.NETLABEL_ARCHIVE];
  });
};

export default filterNetlabelsByNetlabelArchive;
