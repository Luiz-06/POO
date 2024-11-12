function retornarNumeros(lista:number[]) : string {
    return lista.map(num => num.toString()).join(" - ")
}

function main(){
    const lista = [1,2,3,4,5]
    const numerosEmFormatoString = retornarNumeros(lista)

    console.log(numerosEmFormatoString)
}

main()