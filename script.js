document.addEventListener('DOMContentLoaded', function() {
var cript = document.getElementById("cript");
var uncript = document.getElementById("decript")
var text = document.getElementById("texto");
var result = document.getElementById("tradut");


function Criptografar(texto){
    return texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}
function Decriptografar(texto){
    return texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

cript.addEventListener("click", function(){
    document.getElementById("elements").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
    let texto = text.value; 
    let textoCriptografado = Criptografar(texto.toLowerCase()); 
    result.textContent = textoCriptografado; 
    
});
uncript.addEventListener("click", function(){
    document.getElementById("elements").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
    let texto = text.value; 
    let textoCriptografado = Decriptografar(texto.toLowerCase()); 
    result.textContent = textoCriptografado;  
    
});

document.getElementById("copy").addEventListener("click",function(){
    let copytext = result.textContent;
    navigator.clipboard.writeText(copytext);
});

});