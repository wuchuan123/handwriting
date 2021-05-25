let tool = {
  //去除空格  type 1-所有的空格  2-前后空格  3-前空格 4-后空格
  trim(str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, "");
      case 2:
        return str.replace(/^\s*|\s*$/g, "");
      case 3:
        return str.replace(/^\s*/g, "");
      case 4:
        return str.replace(/\s+$/g, "");
    }
  },
  /* 字母大小写切换
  type 
     1:首字母大写
     2：首字母小写
     3：大小写转换
     4：全部大写
     5：全部小写
     * */
  changeCase(str, type) {
    function ToggleCase(str) {
      let itemText = "";
      str.split("").forEach((item) => {
        if (/^[a-z]/.test(item)) {
          itemText += item.toUpperCase;
        } else if (/^[A-Z]/.test(item)) {
          itemText += item.toLowerCase;
        } else {
          itemText += item;
        }
      });
      return itemText;
    }
    switch (type) {
      case 1:
        return str.replace(/\b\w+\b/g, function (word) {
          return (
            word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
          );
        });
      case 2:
        return str.replace(/\b\w+\b/g, function (word) {
          return (
            word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
          );
        });
      case 3:
        return ToggleCase(str);
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
    }
  },
  repeatStr(str, count) {
    return str.replace(count);
  },
  // repeatStrES5(str,count){
  //   let text=''
  //   for(var i=0;i<count;i++){
  //     text+=str
  //   }
  //   return text
  // }

  //字符串替换
  replaceAll(str, AFindText, ARepText) {
    let raRegExp = RegExp(AFindText, "g");
    return str.replace(raRegExp, ARepText);
  },
  // 数组去重
  removeRepeatArray(arr){
    return arr.filter((item,index)=>{
      return arr.indexOf(item)===index
    })
  },
  //数组乱序
  upsetArr(arr){
    return arr.sort(()=>{
      return Math.random()-0.5
    })
  },
  //求数组最大值
  maxArr(arr){
    return Math.max.apply(null,arr)
  },
  //求数组最小值
  minArr(arr){
    return Math.min.apply(null,arr)
  },
  // 日期格式化
  formatDate(format, date) {
    //   "yyyy-MM-dd hh:mm:ss"
    if (!date || !format) {
      return ''
    }
    if (typeof date === 'string') {
      date = date.replace(/-/g, '/')
    }
    date = new Date(date)
    let o = {
      'M+': date.getMonth() + 1, // month
      'd+': date.getDate(), // day
      'h+': date.getHours(), // hour
      'm+': date.getMinutes(), // minute
      's+': date.getSeconds(), // second
      'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
      S: date.getMilliseconds(), // millisecond
      w: '日一二三四五六'.charAt(date.getDay())
    }
    format = format.replace(/y{4}/i, date.getFullYear()).replace(/y{2}/i, date.getFullYear().toString().substring(2))

    for (var k in o) {
      let reg = new RegExp(k)
      format = format.replace(reg, match)
    }
    function match(m) {
      return m.length === 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length)
    }

    return format
  },
  // 格式化数字 10000=> 10,000
  formatPrice(num, int) {
    if (num === undefined) {
      return ''
    }
    if (int) {
      num = parseInt(num)
    }
    num = String(num)
    num = num.replace(/(\d+\.\d{2})\d+/, '$1')
    num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return num
  }
};
