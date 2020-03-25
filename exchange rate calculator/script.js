const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const change = document.getElementById('change');
//Fetch exchange rates, updating DOM
function calculate() {
    const curency_one = currencyEl_one.value
    const curency_two = currencyEl_two.value


    fetch(`https://api.exchangeratesapi.io/latest?base=${curency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[curency_two];
            rateEl.innerHTML = `1 ${curency_one} = ${rate} ${curency_two}`
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2)

        })
}
//Events
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
console.log(change)
change.addEventListener('click', () => {
    console.log('test')
    temporary = currencyEl_one.value
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temporary
    calculate()

})

calculate()