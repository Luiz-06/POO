class App {
    iniciar(): void{
        const opcao = null
        do {
            console.log('\nBem-vindo! Escolha uma opção:');
            console.log('Contas:');
            console.log('1 - Inserir    2 - Consultar  3 - Sacar');
            console.log('4 - Depositar  5 - Excluir  6 - Transferir');
            console.log('7 - Totalizações');
            console.log('Clientes:');
            console.log('8 - Inserir    9 - Consultar   10 - Associar');
            console.log('11 - Total aplicado por cliente');
            console.log('0 - Sair');
        } while (opcao != "0");
    }
}
