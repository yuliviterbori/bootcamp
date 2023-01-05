class Ninja {
    constructor(name){
        this.name = name;
        this.salud = 200;
        this.speed = 10;
        this.fuerza = 10;
    }
    drinkSake(){
        return "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
    }
    returnStats(){
        const message = `Nombre: ${this.name}, Salud: ${this.salud}, Velocidad: ${this.speed}, Fuerza: ${this.fuerza}`
        return message;
    }
    showStats(){
        console.log(this.returnStats());
    }
}


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.sabiduria = 10;
    }
    speakWisdom(){
        console.log(super.drinkSake())
    }
    returnStats(){
        const message = `${super.returnStats()}, Sabiduria: ${this.sabiduria}`
        return message;
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();