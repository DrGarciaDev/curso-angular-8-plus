
let nombres:string = "juan";
let apellido:string = "perez";
let edad:number = 32;

//let texto = "hola" + nombre + " " + apellido + " " + " " + edad;

let texto = `hola ${nombres} ${apellido} ${edad}`;

console.log( texto );

function getNombre() {
    return "fernando";
}
let texto2:string = ` ${ getNombre() } `;