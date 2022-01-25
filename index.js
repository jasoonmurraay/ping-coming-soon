const button = document.querySelector('button')
const input = document.querySelector('.emailInput')
const errorMsg = document.querySelector('.errorMsg')

button.addEventListener('click', function () {
    if (input.value === '' || input.value.indexOf('@') === -1 || input.value.indexOf('.') === -1 || input.value.indexOf('.') < (input.value.length) - 4 || input.value.indexOf('.') > (input.value.length) - 3) {
        event.preventDefault();
        errorMsg.style.display = 'block'
        input.style.border = '1px solid hsl(354, 100%, 66%)'
    }
})