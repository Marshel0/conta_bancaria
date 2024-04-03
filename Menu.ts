import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';
import { Conta } from './src/util/model/Conta';
import { ContaCorrente } from './src/util/model/ContaCorrente';
import { ContaPoupanca } from './src/util/model/ContaPoupanca';
import { ContaController } from './src/util/controller/ContaController';

export function main() {

    let contas: ContaController = new ContaController();
    
    let opcao, numero, agencia, tipo, saldo, limite, diaAniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca']

    // const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Carlos Drummond", 10000, 1000)
    // contacorrente.visualizar();
    // contacorrente.sacar(2000);
    // contacorrente.visualizar();
    // contacorrente.depositar(1000);
    // contacorrente.visualizar();

    // const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Mario de Andrade", 5000, 23)
    // contapoupanca.visualizar();
    // contapoupanca.sacar(100);
    // contapoupanca.visualizar();
    // contapoupanca.depositar(500);
    // contapoupanca.visualizar();


    while (true) {

        console.log(colors.fg.magentastrong,
                    "\n*****************************************************");
        console.log("                                                     ");
        console.log("                    BANCO + VOCÊ                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar conta                          ");
        console.log("            2 - Listar todas as contas               ");
        console.log("            3 - Consultar dados da conta             ");
        console.log("            4 - Atualizar dados da conta             ");
        console.log("            5 - Deletar conta                        ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log(colors.fg.whitestrong, "Entre com a opção desejada: ", colors.reset);
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
                
                console.log("Digite o número da agência: ")
                agencia = readlinesync.questionInt("")

                console.log("Digite o nome do titular: ")
                titular = readlinesync.question("")

                console.log("Informe o tipo da conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1

                console.log("Digite o saldo da conta: ")
                saldo = readlinesync.questionFloat("")

                switch (tipo) {
                    case 1:
                        console.log("Digite o limite da conta: ")
                        limite = readlinesync.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;

                    case 2:
                        console.log("Digite o dia do aniversário da conta: ")
                        diaAniversario = readlinesync.questionInt("")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, diaAniversario)
                        )
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\n* Listar todas as contas *\n\n", colors.reset);
                
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\n* Consultar dados da conta por número *\n\n", colors.reset);
                
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);
                
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\n* Atualizar dados da conta *\n\n", colors.reset);
                
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if(conta != null){

                    console.log("Digite o número da agência: ")
                    agencia = readlinesync.questionInt("")
    
                    console.log("Digite o nome do titular: ")
                    titular = readlinesync.question("")
    
                    tipo = conta.tipo
    
                    console.log("Digite o saldo da conta: ")
                    saldo = readlinesync.questionFloat("")
    
                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da conta: ")
                            limite = readlinesync.questionFloat("")
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
    
                        case 2:
                            console.log("Digite o dia do aniversário da conta: ")
                            diaAniversario = readlinesync.questionInt("")
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, diaAniversario)
                            );
                            break; }
                }else{
                    console.log("A conta não foi localizada!");
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\n* Deletar uma conta *\n\n", colors.reset);
                
                console.log("Digite o número da conta que deseja deletar: ")
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                
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
