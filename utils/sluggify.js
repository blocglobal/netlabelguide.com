import slug from "slug";

const normalizations = [
  ["°", "degrees"],
  [/\+/g, "plus"],
  ["lo-fi", "lofi"],
  ["sci-fi", "scifi"],
  ["/", "-"],
  [" (or minusn)", ""],
  [/^\-/, "minus"],
  [/^\./, "dot"],
];

export default (value) => {
  let normalized = value.toLowerCase();

  normalizations.map((normalization) => {
    normalized = normalized.replace(normalization[0], normalization[1]);
  });

  return slug(normalized);
};
