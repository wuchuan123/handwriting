// 方法一 递归
function deepQuery(tree,id) {
    var isGet = false;
    var retNode = null;
    function deepSearch(tree,id){
        for(var i = 0; i<tree.length; i++) {
            if(tree[i].children && tree[i].children.length>0) {
                deepSearch(tree[i].children,id);
            }
            if(id === tree[i].id || isGet) {
                isGet||(retNode = tree[i]);
                isGet = true;
                break;
            }
        }
    }
    deepSearch(tree,id);
    return retNode;
}
// 方法二 循环
function breadthQuery(tree, id) {
    var stark = [];
    stark = stark.concat(tree);
    while(stark.length) {
        var temp = stark.shift();
        if(temp.children) {
            stark = stark.concat(temp.children);
        }
        if(temp.id === id) {
            return temp;
        }
    }
}