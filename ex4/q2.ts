function tratamento(nome:string, pronome?:string){
    if (pronome == undefined){
        pronome = "Sr(a)"
    }

    const saudacao = `${pronome}. ${nome}`
    console.log(saudacao)
}

tratamento("Luiz")