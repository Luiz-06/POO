const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const pares = () => console.log(array.filter(num => num % 2 == 0).join(" , "))
pares()