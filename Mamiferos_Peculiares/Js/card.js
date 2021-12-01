function precoMostrador(){
    let preco1, preco2, preco3;
    preco1 = parseInt(document.productsForms.ornitorrincoQte.value);
    preco2 = parseInt(document.productsForms.equidinaQte.value);
    preco3 = parseInt(document.productsForms.toupeiraQte.value);
    let valorTotal = (preco1*49.90) + (preco2*49.90) + (preco3*49.90)
    let msg = valorTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
    document.productsForms.resultado.value = msg 
}

function mostrarDetalhes(imagem, texto) {
    document.getElementById(imagem).style.opacity = 0;
    document.getElementById(texto).style.visibility = "visible";
    
}

function ocultarDetalhes(imagem, texto) {
    document.getElementById(imagem).style.opacity = 1;
    document.getElementById(texto).style.visibility = "hidden";
}


function dataAtual(){
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth()).padStart(2, '0');
    let ano = data.getFullYear();

    var vetorMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    let msg = "Jundiaí, " + dia + " de " + vetorMes[mes] + " de " + ano;

    
    document.getElementById("NOME DO ID").value = msg

}
