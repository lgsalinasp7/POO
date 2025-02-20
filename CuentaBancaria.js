class CuentaBancaria {
    #saldo;

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    getSaldo() {
        return this.#saldo;
    }


    depositar(monto){

        if (monto > 0){
            this.#saldo += monto;
            console.log(`✅ Depósito exitoso: nuevo salto ${this.#saldo} `);
        } else {
            console.error('❌ No se puede depositar un monto negativo');
        }
    }

    retirar(monto){
        if (monto > 0 && monto <= this.#saldo){
            this.#saldo -= monto;
            console.log(`✅ Retiro exitoso: nuevo saldo ${this.#saldo}`);
        }
    }




}