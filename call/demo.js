Function.prototype.call2=function(content=window){
  content.fn=this
  var args=[...arguments].slice(1)
  var result=content.fn(...args)
  delete content.fn
  return result
}