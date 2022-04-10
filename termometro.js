
function clicou() { 
    var temperatura = document.querySelector("#temperature").value;
    if (temperatura == 0) {
        window.alert("Insira um valor!");
    } else {    
    var resposta = document.querySelector("#resposta");
    }
    if (temperatura >= 41) {
        resposta.innerHTML = `Você está no Sol! \u{1F31E} <br>(ou provavelmente morto)`;
    } else if (temperatura >= 39.5 && temperatura < 41) {
        resposta.innerHTML = "Você está com febre alta! <br>Procure um médico!";
    } else if (temperatura >= 37.5 && temperatura < 39.5) {
        resposta.innerHTML = "Você está com febre!";
    } else if (temperatura >= 36 && temperatura <= 37.5) {
        resposta.innerHTML = "Você está bem!"
    } else {
        resposta.innerHTML = `Você congelou! \u{2603}`;
    }
}