function login(){
var email = document.getElementById("frmemail").value
var senha = document.getElementById("frmsenha").value
console.log(email)
console.log(senha)
if(email=="email@email" && senha=="123456"){
    alert("Login Realizado")
}else{alert("Login Incorreto")}

}
function Somar(){
    var n1 = parseInt(prompt("Digite o Primeiro Número"))
    var n2 = parseInt(prompt("Digite o Segundo Número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1+n2
    console.log(resultado)
}
function Subtrair(){
    var n1 = parseInt(prompt("Digite o Primeiro Número"))
    var n2 = parseInt(prompt("Digite o Segundo Número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1+n2
    console.log(resultado)
}

function multiplicar(){
    var n1 = parseInt(prompt("Digite o Primeiro Número"))
    var n2 = parseInt(prompt("Digite o Segundo Número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1+n2
    console.log(resultado)
}

function dividir(){
    var n1 = parseInt(prompt("Digite o Primeiro Número"))
    var n2 = parseInt(prompt("Digite o Segundo Número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1/n2
    console.log(resultado)
}

function quadrado(){
    var n1 = parseInt(prompt("Digite o Número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1*n1
    console.log(resultado)
}

