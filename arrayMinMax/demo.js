//for
var arr = [6, 4, 1, 8, 2, 11, 23];
var result=arr[0]
for(let i=0;i<arr.length;i++){
    result=Math.max(result,arr[i]) 
}

//reduce
var arr = [6, 4, 1, 8, 2, 11, 23];
function max(pre,next){
    return Math.max(pre,next)
}
console.log(arr.reduce(max))

//apply
var arr = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max.apply(null,arr))

//...
var arr = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max(...arr))

//sort
var arr = [6, 4, 1, 8, 2, 11, 23];
let result=arr.sort(function(a,b){
    return a-b
})
console.log(result[result.length-1])
