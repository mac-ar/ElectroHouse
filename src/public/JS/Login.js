window.addEventListener("load", function () {
    let formulario = this.document.querySelector('.form-create')
    let btnSubmit = document.querySelector('#btnSubmit');
    let campoUsuario = document.querySelector("#usuario");
    let campoContraseña = document.querySelector("#password");

    let errores = [];

    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();

        if (campoUsuario.value == "") {
            errores.push("El campo Usuario no debe estár vacío");
        };
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
        } else { formulario.submit(); }
    })
})