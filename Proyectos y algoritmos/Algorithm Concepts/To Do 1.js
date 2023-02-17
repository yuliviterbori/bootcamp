// Configuracion e intercambio
let myNumber = 42;
let myName = "Yuli"

let myExNumber = myNumber;
myNumber = myName;
myName = myExNumber;

console.log(myNumber, myName);

// La cuenta regresiva final
const reCount = (p1, p2, p3, p4) =>{
    let initial = p2 + p1 - p2%p1;
    while(initial <= p3){
        if(initial !== p4){
            console.log(initial);
        }
        initial += p1;
    }
}

console.log(reCount(3,5,17,9))