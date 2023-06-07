window.alert("SEJA BEM-VINDO")
let cores = ["green", "red", "orange", "black", "blue", "yellow", "pink", "purple", "gray","brown"]

function alterarCores(){
    var cor1 = parseInt(Math.random()*10) ;
    var cor2 = parseInt(Math.random()*10) ;
    var cor3 = parseInt(Math.random()*10) ;
    document.getElementById("idade").style.color = cores[cor1];
    document.getElementById("cidade").style.color = cores[cor2];
    document.getElementById("ensino").style.color = cores[cor3];
    document.getElementById("idade").style.fontWeight = "900";
    document.getElementById("cidade").style.fontWeight = "900";
    document.getElementById("ensino").style.fontWeight = "900";
    document.getElementById("idade").style.textTransform = "uppercase";
    document.getElementById("cidade").style.textTransform = "uppercase";
    document.getElementById("ensino").style.textTransform = "uppercase";


    document.getElementById("nomeAluno").style.color = cores[cor1];
 document.getElementById("nomeAluno").style.fontWeight = "900";
 document.getElementById("nomeAluno").style.textTransform = "uppercase";}