const formInput = document.querySelectorAll('.input-form')
const buttonSubmit = document.querySelector('.form-submit');
const btnYes = document.querySelector('#confirm-yes');
const btnNo = document.querySelector('#confirm-no');
buttonSubmit.addEventListener('click', onShowModel)
    formInput.onclick = function() {
        formInput.style.backgroundColor = 'black'
    }

    function onShowModel() {
        document.querySelector('.model').classList.add('open')
    }
btnYes.addEventListener('click', onShowYes)
    function onShowYes() {
        document.querySelector('.model').classList.remove('open')
    }
btnNo.addEventListener('click', onShowNo)
    function onShowNo() {
        document.querySelector('.model').classList.remove('open')
    }

