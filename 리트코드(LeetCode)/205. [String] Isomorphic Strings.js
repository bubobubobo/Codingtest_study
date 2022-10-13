const isIsomorphic = (s, t) => {
  const transform = str => {
    const map = {};
    return [...str]
      .map((chr, i) => {
        if (map[chr] !== undefined) return map[chr];
        map[chr] = i;
        return i;
      })
      .join('.');
  };

  return transform(s) === transform(t);
};

const s = 'abcdefghijklmnopqrstuvwxyzva';
const t = 'abcdefghijklmnopqrstuvwxyzck';
console.log(isIsomorphic(s, t));
