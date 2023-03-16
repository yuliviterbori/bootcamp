// quitar espacios

const removeSpaces = str => str.replace(/ /g, '');

console.log("removeSpacers",removeSpaces('Pl ayTha tF u nkyM usi c'))


// obtener digitos
const getDigits = str => +str.replace(/\D/g, '');

console.log("getDigits",getDigits('0s1a3y5w7h9a2t4? 6! 8? 0'))