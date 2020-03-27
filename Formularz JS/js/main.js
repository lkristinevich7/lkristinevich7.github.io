function validateForm(e) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('tel');

    const location = document.getElementById('city');
    const invalid = location.value == "MIASTO";


    const agreementCheckbox = document.getElementById('first_agreement');
    const message = document.getElementById('message');


    message.innerHTML = '';


    if (nameInput.value === '') {
        e.preventDefault();
        const msgName = document.createElement('li');
        msgName.innerText = 'Wprowadz imie!';
        message.appendChild(msgName);
        nameInput.className = 'error';
    }

    if (emailInput.value === '') {
        e.preventDefault();
        const msgEmail = document.createElement('li');
        msgEmail.innerText = 'Wprowadz email';
        message.appendChild(msgEmail);
        emailInput.className = 'error';
    }

    if (telInput.value === '') {
        e.preventDefault();
        const msgTel = document.createElement('li');
        msgTel.innerText = 'Wprowadz numer telefonu!';
        message.appendChild(msgTel);
        telInput.className = 'error';
    }

    if (!agreementCheckbox.checked) {
        e.preventDefault();
        const msgAgrement = document.createElement('li');
        msgAgrement.innerText = 'Zaznacz zgode!';
        message.appendChild(msgAgrement);
    }

    if (invalid) {
        const msgSelect = document.createElement('li');
        msgSelect.innerText = 'Wybierz maisto';
        message.appendChild(msgSelect);
        location.className = 'error';
        e.preventDefault();
    } else {
        location.className = '';
    }

    return !invalid;

}

document.querySelector('form').addEventListener('submit', validateForm);
document.querySelector('select').addEventListener('change', validateForm);


document.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("a").remove();
    document.getElementById("label1").innerHTML += "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit";
});