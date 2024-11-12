var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var dobrar = function () { return console.log(array.map(function (num) { return num * 2; }).join(" , ")); };
var total = function () { return console.log(array.reduce(function (total, num) { return total + num; })); };
dobrar();
total();
