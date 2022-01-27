
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptacion(){
var vocales = ["a","e","i","o","u"];
var claves = ["ai","enter","imes","ober","ufat"];

    var textoIngresado = document.querySelector("#input-texto").value;
    
    var arreglo = Array.from(textoIngresado);

    for (var i = 0; i < arreglo.length; i++)
    {
        for ( var j = 0; j < arreglo.length; j++ )
        {
            if (arreglo[i] == vocales[j]){
                arreglo[i] = claves[j];
                var textoCifrado = arreglo.join("");
                document.querySelector("#msg").value = textoCifrado;
            }
        }
    }   
}


function desencriptacion(){
    
    var textoOculto = document.querySelector("#input-texto").value;
    
    textoOculto = textoOculto.replaceAll("enter", "e")
    textoOculto = textoOculto.replaceAll("imes", "i")
    textoOculto = textoOculto.replaceAll("ai", "a")    
    textoOculto= textoOculto.replaceAll("ober", "o")
    textoOculto = textoOculto.replaceAll("ufat", "u")
    
    
    document.querySelector("#msg").value = textoOculto;
}

var botonCopiar = document.querySelector("#btn-copy")
botonCopiar.addEventListener("click", function(event){

    event.preventDefault()
    var copiar = document.getElementById("msg");
    if (copiar.value.length > 0){
        copiar.select()
        swal({
            title:"texto copiado!!",
            text : "boton Pegar, LO PEGA EN ENTRADA",
            icon: "success",
            buttons :false,
            timer:2000

        });
        navigator.clipboard.writeText(copiar.value)
        
        
    }else{
        swal({
            title:"NO existe texto",
            icon:"error",
            buttons :false,
            timer:2000
            
        })
    }
    
        
})

var botonPegar = document.querySelector("#btn-pegar")
botonPegar.addEventListener("click", function(event){
    event.preventDefault()
    var pegar = document.getElementById("msg")
    if(pegar.value.length > 0){
        document.getElementById("input-texto").value= " "
        document.getElementById("input-texto").value = pegar.value
        swal({
            title:"Texto pagado en Entrada Mensaje",
            icon:"success",
            buttons :false,
            timer:2000
        })
    }else{
        swal({
            title:"NO existe texto",
            icon:"error",
            buttons :false,
            timer:2000
        })

    }
})