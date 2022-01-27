var textoIngresado = document.getElementById("input-texto")

textoIngresado.addEventListener("input", function(){
    var patron = /[a-z\s]{1,300}$/;
    var errorTexto = document.querySelector("#error-texto")

    if (textoIngresado.value.length > 0 && !patron.test(textoIngresado.value)){
        errorTexto.classList.remove("invisible"),
        swal({
            title:"Error!!",
            text: "cambiar el caracter ingresado",
            icon: "error",
            buttons :false,
            timer:2000
            
        })
        

    }else{
        errorTexto.classList.add("invisible")
        var encriptar = document.querySelector("#btn-encriptar");
        encriptar.addEventListener("click",function(event){
        event.preventDefault();
        encriptacion();

        })
        var desencriptar = document.querySelector("#btn-desencriptar");
        desencriptar.addEventListener("click",function(event){
        event.preventDefault();
        desencriptacion();
    

        })
    }

})


    
