const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here 
  if (array1 === null || array1 === undefined && array2 === null || array2 === undefined)
  {return undefined}
  else if(array1 === [] && array2 === [])
  {return []}
  else if(array1 === [] || array1 === null || array1 === undefined)
  {return array2}
  else if(array2 === [] || array2 === null || array2 === undefined)
  {return array1}
  else{return array1.concat(array2)}
  }

module.exports = concatArray
// ให้เขียน Function ชื่อ concatArray (array1, array2) เพื่อ return เป็น array ที่ประกอบด้วยสมาชิกทั้งหมดและเรียงลำดับจาก element ใน array1 และตามด้วย element ใน array2
// กรณี array1 และ array2 ทั้งคู่มีค่า null หรือ undefined ให้คืนค่ากลับเป็น undefined

// กรณี array1 และ array2 ทั้งคู่เป็น empty array ทั้งคู่ ให้ return empty array

// กรณี array1 หรือ array2 อันใดอันหนึ่ง มีค่าเป็น empty array หรือ มีค่าเป็น null หรือ undefined ให้ return element ของ array ที่มีรายการแทน

// ตัวอย่างเช่น

// concatArray([5, 10, 15], [2, 4, 6, 7]) return [ 5, 10, 15, 2, 4, 6, 7]
// concatArray([ ], ['item1', 'item2', 'item3’]) return [ 'item1', 'item2', 'item3' ]
// concatArray([10, 6, 5], []) return [ 10, 6, 5 ]
// concatArray([], []) return []
// concatArray(undefined, [2, 4, 6, 7]) return [2, 4, 6, 7]
// concatArray([2, 4, 6, 7], null) return [2, 4, 6, 7]
// concatArray(undefined, undefined) return undefined
// concatArray(null, undefined) return undefined
// concatArray(undefined, null) return undefined
// concatArray(null, null) return undefined