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
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
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