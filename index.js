const checkInputs = (inputs) => {
    let filled = true;
    inputs.forEach((input) => {
        if (input.value === "") {
            filled = false;
        }
    });
    return filled;
}
const inputs = document.querySelectorAll("input");

inputs.forEach(function (input) {

    input.addEventListener("keyup", function () {
        if (checkInputs(inputs)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});

const veiculo = document.querySelector('#veiculos input')
const valorVeiculo = document.querySelector('#valor-veiculo')
const percentual = document.querySelector('#percentual-entrada')
const parcelas = document.querySelector('#parcelas')
const select = document.querySelector('select')
const button = document.querySelector('button')
const valorEntrada = document.querySelector('#valor-entrada')
const qtdParcelas = document.querySelector('#qtd-parcelas')


const calculateValue = () => {
    if(percentual.value < 30 || percentual.value > 90 || parcelas.value < 3 || parcelas.value > 24) {
        alert('Valor do percentual e ou valor de parcelas fora da regra.')
    } else {
        let percent = percentual.value / 100
        let parcela = parcelas.value
        let valor = valorVeiculo.value * percent
        let novoValorVeiculo = valorVeiculo.value - valor
        let valorParcela = novoValorVeiculo / parcela
    
        valorEntrada.textContent = `O valor de sua entrada é de R$${valor.toFixed(2)}.`
        qtdParcelas.textContent = `Seu ${carro.value} terá ${parcela} parcelas e o valor delas será de R$ ${valorParcela.toFixed(2)}.`
    }
   
}

button.addEventListener('click', calculateValue)





