
class Display{
    constructor(displayvalor_anterior, displayvalor_actual){
    this.displayvalor_anterior = displayvalor_anterior;
    this.displayvalor_actual = displayvalor_actual;
    this.calculadora = new Calculadora();
    this.tipoOperacion = undefined;

    this.valorActual = ' ';
    this.valorAnterior = ' ';

    this.signos = {
        sumar: '+',
        dividir: '%',
        multiplicar: 'x',
        restar: '-', 
    }
    }



    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirvalores();
    }

    borrartodo(){
        this.valorActual = '';
        this.valorAnterior='';
        this.tipoOperacion = undefined;
        this.imprimirvalores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirvalores();
    }

    agregar_numero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirvalores();
    }

    imprimirvalores() {
        this.displayvalor_actual.textContent = this.valorActual;
        this.displayvalor_anterior.textContent =  `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }


    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }

    

}








