// jQuery使用的方法
function toType(obj) {
  if (obj == null) {
    return obj + "";
  }

  var class2type = function(){
    return {}
  }
  var toString = function(){
    return class2type.toString
  }
  // Support: Android <=2.3 only (functionish RegExp)
  return typeof obj === "object" || typeof obj === "function" 
      ? class2type[toString.call(obj)] || "object" 
      : typeof obj;
}

function getType(obj) {
  //tostring会返回对应不同的标签的构造函数
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  // 如若传入的参数是元素节点的情况
  // 元素节点属于对象
  if (obj instanceof Element) {
    return 'element';
  }
  return map[toString.call(obj)];
}