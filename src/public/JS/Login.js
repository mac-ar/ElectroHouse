window.addEventListener("load", function () {
    let formulario = this.document.querySelector('.form-create')
    let btnSubmit = document.querySelector('#btnSubmit');
    let campoUsuario = document.querySelector("#usuario");
    let campoContraseña = document.querySelector("#password");
    let asideFront = document.querySelector('.aside-front');
    let errores = [];
    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        if (errores.length > 0) {
            errores = [];
            asideFront.innerHTML = '<aside class="aside-front"> </aside>'
        }


        if (campoUsuario.value == "") {
            errores.push("El campo Usuario no debe estár vacío");
        };
        if (campoContraseña.value == "") {
            errores.push("El campo Contraseña no debe estár vacío");
        };

        let longitudArray = errores.length

        if (longitudArray > 0) {
            e.preventDefault();
            errores.forEach((error) => {
                asideFront.innerHTML += `<div class="alert alert-warning" role="alert">
                <i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; ${error} </div> `
            })
        } else { formulario.submit(); }
    })
})