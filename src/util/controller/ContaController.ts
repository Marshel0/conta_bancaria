import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    
    private listaContas: Array<Conta> = new Array<Conta>();
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar();
        else
            console.log("\nA conta não foi localizada!")
        
    }
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }

    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(`\nA conta número: ${conta.numero} foi criada com sucesso!`);
    
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta != null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`A conta número: ${conta.numero} foi atualizada com sucesso!`)
        } else
            console.log(`\nA conta número: ${conta.numero} não foi localizada!`)

    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
            console.log(`A conta número: ${numero} foi deletada com sucesso!`)
        }else
            console.log(`\nA conta número: ${numero} não foi localizada!`)

    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if(conta != null){

            if(conta.sacar(valor) == true)
            console.log(`\nO saque na conta número: ${numero} no valor de R$ ${valor.toFixed(2)} foi efetuado com sucesso!`);
        
        }else
        console.log(`\nA conta número: ${numero} não foi localizada!`);

    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if(conta != null) {
            conta.depositar(valor)
            console.log(`\nO depósito na conta número: ${numero} no valor de R$ ${valor.toFixed(2)} foi efetuado com sucesso!`)
        }else
        console.log(`\nA conta número: ${numero} não foi localizada!`)
        
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null){
            if(contaOrigem.sacar(valor) === true){
                contaDestino.depositar(valor)
                console.log(`A transferência no valor de R$ ${valor.toFixed(2)} da conta número: ${numeroOrigem} para a conta número: ${numeroDestino} foi efetuado com sucesso!`)
            }
                
        }else
            console.log("\nA conta de origem e/ou a Conta de destino não foram localizadas!")
    }
    
    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for(let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }

}