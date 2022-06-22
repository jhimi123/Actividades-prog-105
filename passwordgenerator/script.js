const passwordgenerator = () => {
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const b = "abcdefghijklmnopqrstuvwxyz";
    const c = "0123456789"
    let aleatoria = "";
    aleatoria += a.charAt(Math.floor(Math.random() * a.length));
    aleatoria += b.charAt(Math.floor(Math.random() * b.length));
    aleatoria += c.charAt(Math.floor(Math.random() * c.length));
    for (let i = 3; i < 16; i++) {

        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;

};

const alreadythere = (namee) => {
    if (n.length == 0) {
        return false;
    }
    for (let i = 0; i < n.length; i++) {
        if (n[i].name == namee) {
            console.log('ya existe generada una contraseña para la aplicación ',n[i].name,'y es:',  n[i].password)
            return true;
        }
    }
    return false;

}


let app = {
    name: '',
    password: ''
}
let n = [];
let f = true;
let bb = confirm('desea generar una contraseña aleatoria para una app?');


while (bb == true) {

    let input = prompt("Por favor digite para que app desea generar una contraseña aleatoria ");

    if (alreadythere(input) == false) {
        n.push({ name: input, password: passwordgenerator() });
    }
    bb = confirm('desea generar una contraseña aleatoria para otra app?');



}
console.log('estas son las apps con sus respectivas contraseñas creadas', n);

