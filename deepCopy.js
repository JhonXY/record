// 对于一个引用类型，如果直接将它赋值给另一个变量，
// 由于这两个引用指向同一个地址，这时改变其中任何一个引用，另一个都会受到影响。
// 当我们想复制一个对象并且切断与这个对象的联系，就要使用深拷贝。
// 对于一个对象来说，由于可能有多层结构，所以我们可以使用递归来解决这个问题


// obj 待拷贝对象
// data 被拷贝对象
function extend(obj, data){
  var type = getType(data)

  if (type === 'object') {
    var originQueue = [data],
      copyQueue = [obj],
      visitQueue = [],
      copyVisitQueue = [];

    // 广度优先遍历替代递归实现深拷贝
    while (originQueue.length > 0) {
      var _data = originQueue.shift()
      var _obj = copyQueue.shift()
      visitQueue.push(_data)
      copyQueue.push(_obj)
      for (var key in _data) {
        var _value = _data[key]
        if (typeof _value !== 'object') {
          _obj[key] = _value
        } else {
          var index = visitQueue.indexOf(_value)
          if (index >= 0) {
            _obj[key] = copyVisitQueue[index]
          }
          originQueue.push(_value)
          _obj[key] = {}
          copyQueue.push(_obj[key])
        }
      }
    }

    return obj
  }
}

// 获取参数的类型
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