function soma(x: number, y?: any): number {
    return x + y
}//y? significa que é um parametro opcional e o :any significa que pode ser de qualquer tipo, se nao for passado nenhum parametro , y sera undefined

console.log(soma(1, 2)); //13
console.log(soma(1, "2"));//12
console.log(soma(1));//NaN -> aqui ocorre 1 + undefined , oque não é possivel em js/ts