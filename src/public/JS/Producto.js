window.addEventListener('load', function(){
    let formulario = this.document.querySelector('#frmAddProduct');
    let btnSubmit = document.querySelector('#btnSubmit');
    let inputNombre = this.document.querySelector('#nombre');
    let inputdescripcion = this.document.querySelector('#descripcion');
    let inputimagen = this.document.querySelector('#imagen');
    let inputcategoria = this.document.querySelector('#categoria');
    let inputverIndex = this.document.querySelector('#verIndex');
    let inputprecio = this.document.querySelector('#precio');
    let inputespecificaciones = this.document.querySelector('#especificaciones');  
    let asideFront = document.querySelector('.aside-front');    
    let errores = []; 

    btnSubmit.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        let longitudNombre = inputNombre.value.length
        let longitudDescrip = inputdescripcion.value.length
        let imgExt = inputimagen.value.slice(-4)      

        if(errores.length > 0) {           
            errores = [];
            asideFront.innerHTML = '<aside class="aside-front"> </aside>'            
         } 

        
        if(inputNombre.value == ''){           
            errores.push('El nombre del Producto no debe ser vacio')
        }else if (longitudNombre < 3){
            errores.push('El nombre debe tener al menos 5 caracteres')
        }

        if(inputdescripcion.value == ''){
            errores.push('La descripcion no debe ser vacia')
        }else if( longitudDescrip < 20){
            errores.push('La descripcion debe tener al menos 20 caracteres')
        }       
       
        if(imgExt != '.jpg' && imgExt != 'jpeg' && imgExt != '.png' && imgExt != '.gif'){
            errores.push('La imagen no tiene la extension correcta debe ser JPG JPEG PNG GIF')            
        }

        let longitudArray = errores.length

        if(longitudArray > 0){
            e.preventDefault();
            errores.forEach((error) => {
                asideFront.innerHTML += `<div class="alert alert-warning" role="alert">
                <i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; ${error} </div> `
             })            
        }else 
        {formulario.submit();}        
    })      
    
})