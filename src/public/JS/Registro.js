//window.addEventListener("load", function () {
let formulario = this.document.querySelector('.form-create')

formulario.addEventListener('submit', function (e) {
    // e.preventDefault();
    let errores = [];
    alert('form')
    let campoNombre = document.querySelector("#nombre");
    if (campoNombre.value == "") {
        alert('if nombre')
        errores.push("El campo nombre está vacío");
    } else if (campoNombre.length < 2) {
        errores.push("El campo debe tener al menos 2 caracteres");
    };
    alert('nombre' + errores)
    let campoEmail = document.querySelector("#email");
    if (campoEmail.value == "") {
        errores.push("El Mail no debe estár vacío");
    } //else if () { };

    let campoApellido = document.querySelector("#apellido");
    if (campoApellido.value == "") {
        errores.push("El Apellido no debe estár vacío");
    } else if (campoApellido.length < 2) {
        errores.push("El campo debe tener al menos 2 caracteres");
    };
    alert('apellido' + errores)
    let campoFoto = document.querySelector("#foto");
    if (campoFoto.value == "") {
        errores.push("El campo no debe estár vacío");
    };

    let campoUsuario = document.querySelector("#usuario");
    if (campoUsuario.value == "") {
        errores.push("El campo Usuario no debe estár vacío");
    };

    let campoContraseña = document.querySelector("#password");
    if (campoContraseña.value == "") {
        errores.push("El campo Contraseña no debe estár vacío");
    };

    if (errores.legth > 0) {

        //e.preventDefault();
        let ulErrores = document.querySelector(".errores ul");

        errores.forEach(error => {
            ulErrores.innerHTML += `<li>  ${error} </li>`;
        })
        /* for (let index = 0; index < errores.length; index++) {
            //ulErrores.innerHTML += "<li>" + errores[index] + "</li>";
            ulErrores.innerHTML += `<li>  ${errores[index]} </li>`;
            //console.log(errores);
        } */
    }
})
//})


