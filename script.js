const botaoDaConversao = document.querySelector(".botao-converter") /*mapeamento do botão */
const primeiraMoedaSelecionada = document.querySelector(".primeiro-select")
const segundaMoedaSelecionada = document.querySelector(".segundo-select")

function converterValores() {
    const valorParaConverter = document.querySelector(".input-a-converter").value /* Criando uma variavel que pegará o valor digitado no input*/
    const valorDigitado = document.querySelector(".valor-digitado")
    const valorResultante = document.querySelector(".valor-convertido")

    const dolarToday = 5.15 /* variavel com valor da moeda a converter */
    const euroToday = 5.62
    const libraToday = 6.61

    if (segundaMoedaSelecionada.value == "dolar") {

        valorResultante.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorParaConverter / dolarToday) /* alterando o texto da moeda convertida  DOLAR*/

    }

    if (segundaMoedaSelecionada.value == "euro") { /* alterando o texto da moeda convertida  Euro*/

        valorResultante.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorParaConverter / euroToday)

    }

    if (segundaMoedaSelecionada.value == "libra") { /* alterando o texto da moeda convertida  LIBRA*/

        valorResultante.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorParaConverter / libraToday)

    }


    valorDigitado.innerHTML = new Intl.NumberFormat("pt-BR", { /* alterando o texto da moeda a ser convertida */

        style: "currency",
        currency: "BRL"
    }).format(valorParaConverter)




}


function alteracaoPrimeiraMoeda() {
    const primeiraMoeda = document.querySelector(".moeda-escolhida")
    const imgPrimeiraMoeda = document.querySelector(".primeira-moeda-img")

    if (primeiraMoedaSelecionada.value == "real") {
        primeiraMoeda.innerHTML = "Real"
        imgPrimeiraMoeda.src = "./assets/brasil.png"
    }

    if (primeiraMoedaSelecionada.value == "dolar") {
        primeiraMoeda.innerHTML = "Dólar Americano"
        imgPrimeiraMoeda.src = "./assets/Dolar.png"
    }

    if (primeiraMoedaSelecionada.value == "euro") {
        primeiraMoeda.innerHTML = "Euro"
        imgPrimeiraMoeda.src = "./assets/Euro.png"
    }

    if (primeiraMoedaSelecionada.value == "libra") {
        primeiraMoeda.innerHTML = "Libra"
        imgPrimeiraMoeda.src = "./assets/Libra.png"
    }

}

primeiraMoedaSelecionada.addEventListener("change", alteracaoPrimeiraMoeda)


function alteracaoSegundaMoeda() {  /* função para alterar texto e img conforme a moeda selecionada */
    const nomeDaMoeda = document.querySelector(".moeda-convertida")
    const moedaImg = document.querySelector(".segunda-moeda-img")


    if (segundaMoedaSelecionada.value == "dolar") {
        nomeDaMoeda.innerHTML = "Dólar Americano"
        moedaImg.src = "./assets/Dolar.png"
    }

    if (segundaMoedaSelecionada.value == "euro") {
        nomeDaMoeda.innerHTML = "Euro"
        moedaImg.src = "./assets/Euro.png"
    }

    if (segundaMoedaSelecionada.value == "libra") {
        nomeDaMoeda.innerHTML = "Libra"
        moedaImg.src = "./assets/Libra.png"
    }
    if (segundaMoedaSelecionada.value == "real") {
        nomeDaMoeda.innerHTML = "Real Brasileiro"
        moedaImg.src = "./assets/brasil.png"
    }

    converterValores()
}




segundaMoedaSelecionada.addEventListener("change", alteracaoSegundaMoeda)
botaoDaConversao.addEventListener("click", converterValores) /* quando clicar no botão, vai chamar a função converterValores que fará a conversão dos mesmos */
/*addEventListener <- adicionando um ouvinte ao clique do botão*/


















document.addEventListener('DOMContentLoaded', () => { /* impedindo que os mesmos valores sejam selecionados em ambos inputs*/
    const selectDe = document.getElementById('selectDe');
    const selectPara = document.getElementById('selectPara');

    function validateSelects() {
        if (selectDe.value === selectPara.value) {
            alert('As duas moedas não podem ser iguais. Por favor, selecione moedas diferentes.');
            selectPara.value = '';
        }
    }

    selectDe.addEventListener('change', validateSelects);
    selectPara.addEventListener('change', validateSelects);
});