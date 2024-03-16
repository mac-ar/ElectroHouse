//window.addEventListener("load", function () {
let formulario = this.document.querySelector('.form-create')

formulario.addEventListener('submit', function (e) {
    let errores = [];

    let campoNombre = document.querySelector("#nombre");
    if (campoNombre.value == "") {
        errores.push("El campo nombre está vacío");
    } else {
        let nombrelen = campoNombre.length
        if (nombrelen < 5) {
            errores.push("El campo debe tener al menos 5 caracteres");
        }
    };

    let campoDescripcion = document.querySelector("#descripcion");
    if (campoDescripcion.value == "") {
        errores.push("La Descripcion no debe estár vacío");
    } else {
        let descripcionlen = campoDescripcion.length
        if (descripcionlen < 2) {
            errores.push("El campo Descripcion debe tener al menos 20 caracteres");
        }
    };

    let campoFoto = document.querySelector("#foto");
    if (campoFoto.value == "") {
        errores.push("El campo FOTO no debe estár vacío");
    }/* else{ if(){}};*/

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

    }
})
//})