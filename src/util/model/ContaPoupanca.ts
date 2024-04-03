import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{

    private _diaAniversario: number;

	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, diaAniversario: number) {
        super(numero, agencia, tipo, titular, saldo)
		this._diaAniversario = diaAniversario;
	}

	public get diaAniversario(): number {
		return this._diaAniversario;
	}

	public set diaAniversario(value: number) {
		this._diaAniversario = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Dia do aniversario da conta: " + this._diaAniversario)
    }


}