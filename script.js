const btn = document.querySelector('#send')
var display = document.querySelector('#tarefa')

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector('#tarefa');
    const value = name.value;

    if (value === name) {
        display.innerHTML = `${value}`
    } else {
        display.innerHTML = `Por favor, insira uma tarefa`
    }
});