function calcularIMC() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    
    if (imc < 18) {
        document.getElementById("resultadoo").innerHTML = imc+ "<br>"+"(Abaixo do peso)";
    } else if (imc >= 18 && imc < 25) {
        document.getElementById("resultadoo").innerHTML = imc+ "<br>"+"(Peso normal)";
    } else{
        document.getElementById("resultadoo").innerHTML = imc+ "<br>"+"Sobrepeso";
    }
}
function copyToClipboard() {
    const codeSnippet = document.getElementById('code-snippet');
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado para a área de transferência!');
}
