var arr = new Array();
for (var i = 0; i < 1; i++) {
    var element = Math.floor(Math.random() * 16 + 1);
    for (var j = 0; j <= arr.length; j++) {
        if (arr[j]==element) {
            break;
        }
    }
    // 判断内层是否是break出来的
    if (j == arr.length+1) {
        arr.push(element);
    }else{
        // 如果是Break结束循环，说明有这个值，让i减1再随机一个数
        i--
    }
}
console.log(arr)