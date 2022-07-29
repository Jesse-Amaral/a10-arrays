const arraysNumbers = [2, 1, 3, 5, 4, 7, 6]
const arraysStrings = ['uva', 'banana', 'manga', 'pera']
const arraysDiversos = [9, 10, 'jaca', true]


const arraysNumbersCopia = arraysNumbers.slice()
arraysNumbersCopia.push(10)
console.log(arraysNumbers)
console.log(arraysNumbersCopia)


const arraysStringsCopia = arraysStrings.slice()
arraysStringsCopia.pop()
console.log(arraysStrings);
console.log(arraysStringsCopia);


const arraysDiversosCopia = arraysDiversos.slice()
arraysDiversosCopia.splice(1,1)
console.log(arraysDiversos);
console.log(arraysDiversosCopia);


