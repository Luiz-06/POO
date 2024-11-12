const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const dobrar = () => console.log(array.map(num => num * 2).join(" , "))
const total = () => console.log(array.reduce((total, num) => total + num))

dobrar()
total()