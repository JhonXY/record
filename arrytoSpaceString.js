
let tips = ['11211', 123, 2323]

tips = tips.reduce((pre, cur, i) => {
  return i === 0
    ? `${cur.toString()}`
    : `${pre.toString()} ${cur.toString()}`
}, '')