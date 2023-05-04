class Display {
    constructor(displayPreValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreValue = displayPreValue;
        this.calculador = new Calculator();
        this.tipoOperacion = undefined;
        this.CurrentValue = '';
        this.PreValue = '';
        this.signos = {
            add: '+',
            dividir: '%',
            multiply: 'x',
            subtract: '-', 
        }
    }

    borrar() {
        this.CurrentValue = this.CurrentValue.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.CurrentValue = '';
        this.PreValue = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'equal' && this.calcular();
        this.tipoOperacion = tipo;
        this.PreValue = this.CurrentValue || this.PreValue;
        this.CurrentValue = '';
        this.imprimirValores();
    }

    agregarnum(num) {
        if(num === '.' && this.CurrentValue.includes('.')) return
        this.CurrentValue = this.CurrentValue.toString() + num.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayCurrentValue.textContent = this.CurrentValue;
        this.displayPreValue.textContent = `${this.PreValue} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const PreValue = parseFloat(this.PreValue);
        const CurrentValue = parseFloat(this.CurrentValue);

        if( isNaN(CurrentValue)  || isNaN(PreValue) ) return
        this.CurrentValue = this.calculador[this.tipoOperacion](PreValue, CurrentValue);
    }
}


