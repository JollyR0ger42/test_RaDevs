function genPermutations(target) {
  const elements = new String(target).split('')
  const result = []

  if (elements.length < 2) {
    return elements
  }
  else {
    for (let idx in elements) {
      const el = elements[+idx]
      const remainder = [...elements.slice(0, +idx), ...elements.slice(+idx + 1)]
      for (let nextPermutations of genPermutations(remainder.join(''))) {
        result.push(el + nextPermutations)
      }
    }
  }
  return result
}

function biggerNumber(target) {
  let permutations = genPermutations(target)
  permutations = [...new Set(permutations.map(el => +el))]
  permutations = permutations.sort((a,b) => a - b)
  const resultIdx = permutations.indexOf(target) + 1
  return permutations[resultIdx] ?? -1
}

console.log(biggerNumber(23)) // 32
console.log(biggerNumber(624)) // 642
console.log(biggerNumber(2018)) // 8210
console.log(biggerNumber(9)) // -1
console.log(biggerNumber(111)) // -1
console.log(biggerNumber(531)) // -1
