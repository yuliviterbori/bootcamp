/*
Calificación con letras
El Sr. Cerise enseña matemáticas en la escuela secundaria. Escribe una función que asigne e imprima una calificación en letra, dado un número entero que represente una puntuación de 0 a 100. Aquellos que obtienen 90+ obtienen una "A", 80-89 obtienen una "B", 70-79 es una "C", 60-69 deben obtener una "D" y menos de 60 reciben una "F". Por ejemplo, con 88, deberías registrar "Puntuación: 88. Calificación: B.” Con el puntaje 61, registra la cadena "Puntaje: 61. Calificación: D".

*/

const calificacion = puntaje => {
    const res = ["A", "B", "C", "D"];
    if(puntaje<60){
        console.log(`Puntuacion: ${puntaje}. Calificacion: F`)
        return "F"
    }
    let cal = res[ Math.trunc(4 - (puntaje-59)/10)];
    console.log(`Puntuacion: ${puntaje}. Calificacion: ${cal}`);
    return cal
}

console.log(calificacion(44));
console.log(calificacion(54));
console.log(calificacion(64));
console.log(calificacion(74));
console.log(calificacion(84));
console.log(calificacion(94));
console.log(calificacion(90));
console.log(calificacion(80));
