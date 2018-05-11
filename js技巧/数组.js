//1. 是否是数组
// es5
function isArray(i){
  return Array.isArray(i)
}
// 兼容
function isArray(i){
  return Object.prototype.toString.call(obj) === '[object Array]'
}
// 终极兼容
// 按情况定制
var isArray = function(){
  if(Array.isArray){
    return Array.isArray
  }
  var objToStr = Object.prototype.toString,
      arrToStrRes = objToStr.call([])
  return function(subject){
    return objToStr.call(subject) === arrToStrRes
  }
}()

// 2. 复制数组
let list = [1,2,3]
// 利用返回新数组的方法
function copyArr(arr) {
  // 推荐使用slice
  return arr.slice()
  // return arr.map(i => i)
}

// 3. 数组去重
// 最简单
function uniqArr(arr) {
  return [...new Set(arr)]
}
// 最优
// 对象键值对法
function uniqArr(arr){
  // 用对象标识是否已有该值
  var newArr = [], obj = {},
      len = arr.length
  for(var i = 0; i < len; i++){
    // 遍历数组看是否已在对象中标识
    if (!obj[typeof arr[i] + arr[i]]) {
      // 如果不包含，将存入对象的元素的值推入到结果数组中
      // 并标识已包含 样式
      // obj { 'number1' : 1}
      obj[typeof arr[i] + arr[i]] = 1
      newArr.push(arr[i])
    }
  }
  return newArr
}