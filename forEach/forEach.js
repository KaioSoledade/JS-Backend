const notas = [ 20, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (notas){
    somaDasNotas += notas;
});

const media =  somaDasNotas / notas.length;

console.log(`A media das notas é ${media}`)