var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var pares = function () { return console.log(array.filter(function (num) { return num % 2 == 0; }).join(" , ")); };
pares();
