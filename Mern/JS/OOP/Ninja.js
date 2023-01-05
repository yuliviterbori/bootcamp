class Ninja {
    constructor(name){
        this.name = name;
        this.stats = ["human"];
    }
    sayName(){
        console.log("My name is " + this.name)
    }
    showStats(){
        this.stats.forEach(e => console.log(e))
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();