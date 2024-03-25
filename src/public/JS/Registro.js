window.addEventListener("load", function () {
    let formulario = this.document.querySelector('.form-create')
    let btnSubmit = document.querySelector('#btnSubmit');
    let campoNombre = document.querySelector("#nombre");
    let campoApellido = document.querySelector("#apellido");
    let campoEmail = document.querySelector("#email");
    let campoFoto = document.querySelector("#foto");
    let campoUsuario = document.querySelector("#usuario");
    let campoContraseña = document.querySelector("#password");

    let errores = [];

    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();

        let nombrelen = campoNombre.value.length
        let apellidolen = campoApellido.value.length
        let passwordlen = campoContraseña.value.length
        let isOk = campoEmail.value.indexOf('@');
        let imgExt = campoFoto.value.slice(-4)

        if (campoNombre.value == "") {
            errores.push("El campo nombre está vacío");
        } else {
            if (nombrelen < 2) {
                errores.push("El campo debe tener al menos 2 caracteres");
            }
        };
        if (campoApellido.value == "") {
            errores.push("El Apellido no debe estár vacío");
        } else {
            if (apellidolen < 2) {
                errores.push("El campo APELLIDO debe tener al menos 2 caracteres");
            }
        };
        if (campoEmail.value == "") {
            errores.push("El Mail no debe estár vacío");
        } else if (isOk < 0) {
            errores.push("Debe Ingresar un EMAIL valido")
        };
        if (campoFoto.value == "") {
            errores.push("El campo FOTO no debe estár vacío");
        };
        if (imgExt != '.jpg' && imgExt != 'jpeg' && imgExt != '.png' && imgExt != '.gif') {
            errores.push('La imagen no tiene la extension correcta debe ser JPG JPEG PNG GIF')
        }
        if (campoUsuario.value == "") {
            errores.push("El campo Usuario no debe estár vacío");
        };
        if (campoContraseña.value == "") {
            errores.push("El campo Contraseña no debe estár vacío");
        } else {
            if (passwordlen < 8) {
                errores.push("El campo Contraseña debe tener al menos 8 caracteres");
            }
        };

        let longitudArray = errores.length

        if (longitudArray > 0) {
            e.preventDefault()
            let ulErrores = document.querySelector("aside");
            errores.forEach(error => {
                ulErrores.innerHTML += ` <div class="alert alert-warning" role="alert">
                              <i class="fa-solid fa-triangle-exclamation">  
                              </i>&nbsp; &nbsp;<p>${error}</p>
                          </div>`;
            })
        } else { formulario.submit(); }
    })
})


