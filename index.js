const button = document.getElementById('convert-button')
const select = document.getElementById("currency-select")
const dolar = 5.41
const euro = 6.04
const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realTextValue = document.getElementById('real-text-value')
    const currencyTextValue = document.getElementById('currency-text-value')

    realTextValue.innerHTML = inputReais

    realTextValue.innerHTML = new Intl.NumberFormat('pr-BR',{
        style: 'currency', currency: 'BRL' 
    }).format(inputReais); 
    if(select.value === "US$ Dolar americano"){
        currencyTextValue.innerHTML = new Intl.NumberFormat('en-US',{
            style: 'currency', currency: 'USD' 
          }).format(inputReais/dolar); 
    }

    if(select.value === "€ Euro"){
        currencyTextValue.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency', currency: 'EUR'
          }).format(inputReais/euro); 
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value === 'US$ Dolar americano'){
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src="./assets/eua.png"
    }

    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src="./assets/euro.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
