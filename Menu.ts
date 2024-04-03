import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';
import { Conta } from './src/util/model/Conta';
import { ContaCorrente } from './src/util/model/ContaCorrente';
import { ContaPoupanca } from './src/util/model/ContaPoupanca';

export function main() {

    let opcao: number;

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Carlos Drummond", 10000, 1000)
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Mario de Andrade", 5000, 23)
    contapoupanca.visualizar();
    contapoupanca.sacar(100);
    contapoupanca.visualizar();
    contapoupanca.depositar(500);
    contapoupanca.visualizar();


    while (true) {

        console.log(colors.fg.magentastrong,
                    "\n*****************************************************");
        console.log("                                                     ");
        console.log("                    BANCO + VOCÊ                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.magentastrong)
            console.log("\n Banco + VOCÊ - O seu futuro começa aqui!");
            sobre();
            console.log(colors.reset, "")
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\n* Criar conta *\n\n", colors.reset);
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\n* Listar todas as contas *\n\n", colors.reset);
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\n* Consultar dados da conta por número *\n\n", colors.reset);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\n* Atualizar dados da conta *\n\n", colors.reset);
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\n* Deletar uma conta *\n\n", colors.reset);
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\n* Sacar *\n\n", colors.reset);
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\n* Depositar *\n\n", colors.reset);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\n* Transferência entre contas *\n\n", colors.reset);
                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\n\nOpção inválida!\n\n", colors.reset);
                keyPress()
                break;

        }

    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Marcelo Henrique ");
    console.log("Marcelo Henrique - mah_henrique4478@hotmail.com");
    console.log("github.com/Marshel0");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
