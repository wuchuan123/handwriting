Function.prototype.apply2=function(content=window){
    content.fn=this
    let result
    if(arguments[1]){
        result= content.fn(arguments[1])
    }else{
        result=content.fn()
    }
    delete content.fn
    return result
}

let foo = {
    value: 1,
  };
  function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
  }
  bar.apply2(foo, ["black", "18"]);
  