// 对象数组中对象共有的某一属性的最大值所在对象在数组中的index

function maxIndex(data, attr) {
  var newArray = []
  for (var i = 0; i < data.length; i++) {
    newArray.push(data[i][attr])
  }
  var value = Math.max.apply(Math, newArray);
  return newArray.indexOf(value)
}