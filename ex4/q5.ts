function exibir(...lista : string[]){
    lista.forEach(item => console.log(item))
}

const lista = ["a", "b", "c", "d"]
exibir(...lista)
