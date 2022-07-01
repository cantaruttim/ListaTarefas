const btn = document.querySelector('#send')

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector('#tarefa');
    const value = name.value;

    console.log(value)

});