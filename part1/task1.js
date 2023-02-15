function sortFunc (a, b) {
  const _a = a.replace(/\D/g, '')
  const _b = b.replace(/\D/g, '')
  return _a - _b
}

function sortString(target) {
  const arr = target.split(' ')
  arr.sort(sortFunc)
  return arr.join(' ')
}

console.log(sortString('g5et ski3lls on6 use1 your2 to4 7top'))
console.log(sortString(''))
console.log(sortString('practic3 h4rder yo1u 2hould'))
