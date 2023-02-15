function queueTime(customers, cashiersNumber) {
  const cashiers = new Array(cashiersNumber).fill(0)
  for (let customer of customers) {
    const minCash = Math.min(...cashiers)
    const minIdx = cashiers.indexOf(minCash)
    cashiers[minIdx] += customer
  }
  console.log(cashiers)
  return Math.max(...cashiers)
}

console.log(queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1)) //  418
console.log(queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4)) //162
console.log(queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5)) //65
