// 树型数据结构加工成符合组件能用的树型结构
const generateTreeData = (childrenLabel) => {
  if (!childrenLabel || childrenLabel.length === 0) {
    return null;
  }
  return childrenLabel.map((item) => {
    const { value, code, child } = item;
    const treeNode = {
      title:value,
      children: null,
      id:code,
    };
    if (child) {
      treeNode.children = generateTreeData(child);
    }
    return treeNode;
  });
};
