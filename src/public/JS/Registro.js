//window.addEventListener("load", function () {
let formulario = this.document.querySelector('.form-create')

formulario.addEventListener('submit', function (e) {
    let errores = [];

    let campoNombre = document.querySelector("#nombre");
    if (campoNombre.value == "") {
        errores.push("El campo nombre está vacío");
    } else {
        let nombrelen = campoNombre.length
        if (nombrelen < 2) {
            errores.push("El campo debe tener al menos 2 caracteres");
        }
    };

    let campoEmail = document.querySelector("#email");
    if (campoEmail.value == "") {
        errores.push("El Mail no debe estár vacío");
    } //else if () { };

    let campoApellido = document.querySelector("#apellido");
    if (campoApellido.value == "") {
        errores.push("El Apellido no debe estár vacío");
    } else {
        let apellidolen = campoApellido.length
        if (apellidolen < 2) {
            errores.push("El campo APELLIDO debe tener al menos 2 caracteres");
        }
    };

    let campoFoto = document.querySelector("#foto");
    if (campoFoto.value == "") {
        errores.push("El campo FOTO no debe estár vacío");
    };

    let campoUsuario = document.querySelector("#usuario");
    if (campoUsuario.value == "") {
        errores.push("El campo Usuario no debe estár vacío");
    };

    let campoContraseña = document.querySelector("#password");
    if (campoContraseña.value == "") {
        errores.push("El campo Contraseña no debe estár vacío");
    };

    let num = errores.length
    if (num > 0) {
        e.preventDefault()
        let ulErrores = document.querySelector("aside");

        errores.forEach(error => {
            ulErrores.innerHTML += ` <div class="alert alert-warning" role="alert">
                              <i class="fa-solid fa-triangle-exclamation">  
                              </i>&nbsp; &nbsp;<p>${error}</p>
                          </div>`;
        })
        errores = [];
    }
})
//})


