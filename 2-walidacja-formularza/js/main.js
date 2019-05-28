/*Walidacja pol  */

function validateForm(e){ //funkacja nazwana (dla wykorzystania wielokrotnie)
    
    // console.log('test');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const agreementCheckbox = document.getElementById('zgoda-marketingowa-1');
    const message = document.getElementById('wiadomosc');

    message.innerHTML = ''; //???????
    
    if(nameInput.value === '') {
        e.preventDefault();
        const msgName = document.createElement('li');
        msgName.innerText = 'Wpisz imie!';
        message.appendChild(msgName);
    }

    if(emailInput.value === ''){
        e.preventDefault();
        const msgEmail = document.createElement('li');
        msgEmail.innerText = 'Wpisz email!';
        message.appendChild(msgEmail);
    }

    if(!agreementCheckbox.checked){   // !zwraca wartosc logiczna
        e.preventDefault();
        const msgAgrement = document.createElement('li');
        msgAgrement.innerText = 'Zaznacz!';
        message.appendChild(msgAgrement);
    }
}

document.querySelector('form').addEventListener('submit', validateForm);

console.log(document.getElementsByTagName('input'))



/* Zaznaczenie checkboxow */
function checkChekbox() {
    // console.log('test checkboxa');
    const firstMarketingAgreement= document.getElementById('zgoda-marketingowa-1');
    const secondMarketingAgreement= document.getElementById('zgoda-marketingowa-2');
    console.log(this.checked);


    // if(this.checked) {
    //     console.log('test');
    //     firstMarketingAgreement.checked = true;
    //     secondMarketingAgreement.checked = true;
    //     firstMarketingAgreement.disabled = true;
    //     secondMarketingAgreement.disabled = true;
    // } else {
    //     firstMarketingAgreement.checked = false;
    //     secondMarketingAgreement.checked = false;
    //     firstMarketingAgreement.disabled = false;
    //     secondMarketingAgreement.disabled = false;
    // }


        firstMarketingAgreement.checked = this.checked;
        secondMarketingAgreement.checked = this.checked;
        firstMarketingAgreement.disabled = this.checked;
        secondMarketingAgreement.disabled = this.checked;
    }

document.getElementById('wszystkie-zgody').addEventListener('change', checkChekbox);


/* Dodawanie kominukatow */



