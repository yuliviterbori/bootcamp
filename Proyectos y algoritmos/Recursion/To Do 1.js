const sigma = number => {
    if(number <= 1) return number;
    return number + sigma(number-1)
}
console.log("sigma(4) = ",sigma(4))


const factorial = number => {
    if(number <= 1) return 1;
    return number * factorial(number-1)
}
console.log("4! = ",factorial(4))