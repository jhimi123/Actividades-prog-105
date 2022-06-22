let named = document.querySelector(".app-name");
let btn = document.querySelector(".create");
let tabla = document.querySelector(".tblDatos");
const passwordgenerator = () => {
    if (alreadythere(named.value) == false  ) {
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
        datos.push({ name: named.value, password: aleatoria });
        addinfo();

    }

};

const addinfo = () => {
    let row = tabla.insertRow(tabla.length);
    let cell = row.insertCell(0);
    cell.innerHTML = datos[datos.length - 1].name;
    cell = row.insertCell(1);
    cell.innerHTML = datos[datos.length - 1].password;


}

const alreadythere = (namee) => {
    if(!namee){
        alert('El campo de app debe estar lleno');
        return true;
    }
    if (datos.length == 0) {
        return false;
    }
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].name == namee) {
            alert('ya existe generada una contraseña para la aplicación ', datos[i].name, 'y es:', datos[i].password)
            return true;
        }
    }
    return false;



}
let app = {
    name: '',
    password: ''
}
let datos = [];
btn.addEventListener("click", function () {
    passwordgenerator();
});

