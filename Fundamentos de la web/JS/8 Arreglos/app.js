function alwaysHungry(arr) {
    let hayComida = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === "comida"){
            console.log("delicioso");
            hayComida = true;
        }
    }
    if(!hayComida){
        console.log("Tengo hambre")
    }
}
   
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for(i=0;i<n-2;i++){
        fibArr.push(fibArr[i]+fibArr[i+1])
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

