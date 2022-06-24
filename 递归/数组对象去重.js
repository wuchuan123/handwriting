const arrObj = (arr) => {
  const obj = {};
  return arr.reduce((cur, next) => {
    obj[next.id] ? "" : (obj[next.id] = true && cur.push(next));
    return cur;
  });
};
