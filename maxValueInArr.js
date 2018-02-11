// 对象数组中对象共有的某一属性的最大值

function maxValue(data, attr) {
  var newArray = []
  for (var i = 0; i < data.length; i++) {
    newArray.push(data[i][attr])
  }
  return Math.max.apply(Math, newArray);
}