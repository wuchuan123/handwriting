const data = [
  {
    id: 1,
    name: "北京",
    children: [
      {
        id: 11,
        name: "朝阳",
        children: [{ id: 111, name: "朝阳1号" }],
      },
      {
        id: 12,
        name: "海淀",
        children: [{ id: 121, name: "海淀1号" }],
      },
    ],
  },
  {
    id: 2,
    name: "上海",
    children: [
      {
        id: 21,
        name: "浦东",
        children: [{ id: 211, name: "浦东1号" }],
      },
      {
        id: 22,
        name: "虹口",
        children: [{ id: 221, name: "虹口1号" }],
      },
    ],
  },
];
// 正向-树形结构转平铺
// 从外到内依次递归，有 children 则继续递归
function treeToArr(data, pid = null, res = []) {
  data.forEach((item) => {
    res.push({ pid: pid, id: item.id, name: item.name });
    if (item.children && item.children.length !== 0) {
      treeToArr(item.children, item.id, res);
    }
  });
  return res;
}

const arr = treeToArr(data);
console.log(arr);
