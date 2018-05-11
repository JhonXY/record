// 1. !!
// 检查一些变量是否存在
// 或者它是否具有有效值
// 从而将它们的值视为true
// 可以使用!!（双重否定运算符）
// 自动将任何类型的数据转换为布尔值
// 返回false： 0， null， ""，undefined或NaN， 
// 其他的都返回true
if(!!null){
  // 不为null
  console.log('不为null');
}


// 2. +
// 转换为数字
// 仅限数字字符串或时间格式
+'12'+1 // 13

// 这个转换操作也可以作用于Date， 在这种情况下， 它将返回时间戳：
console.log(+new Date()) // 1461288164385

// 3. &&
// 在React的JSX中也被大量使用
// 判断a执行b的简写
let a = 1,
b = () =>{
  console.log(this)
}
if(a){
  b()
}
// ==
a && b()
// 也可用于检查对象中是否有某属性或函数
let user =  {
  a: 1,
  b: ()=>{
    console.log('b');
  }
}
if(user && user.a){
  // 存在user且user有a属性
  // 不会因为user或user不存在a而报错
}

// 4. ||
// 使用 || 来设置默认值
// es6设置默认值
function pepole(name = 'test', sex = 'man') {
  this.name = name
  this.sex = sex
}
let p1 = new pepole()
// 兼容式写法
function pepole(name, sex){
  this.name = name || 'test'
  this.sex = sex || 'man'
}

// 5. 一定要显式表示length
// 为了性能
let arr = [1,2,4,5,8]
for (let i = 0, l = arr.length; i < l; i++){
}


// 6. in
// 使用 in 做判断
// 但in会让原型链上的也遍历出来
// 但document不是一般对象，可以随便用
// 其实如果是对象也可以用 .hasOwnProperty 只会查自己的属性
// 主要用于document的兼容式写法
if('querySelector' in document){
  document.querySelector('#id')
} else {
  document.getElementById('#id')
}


// 7. NodeList与数组
// 将NoedeList转换为数组
// 以方便使用数组的方法
var elements = document.querySelectorAll('p')
// 兼容式的写法
var arrEle = [].slice.call(elements)
// 兼容性没那么好
arrEle = Array.from(elements)