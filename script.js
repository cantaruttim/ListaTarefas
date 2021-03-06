const btn = document.querySelector('#send');

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector('#tarefa');
    const value = name.value;

    const div = document.querySelector('.bloco_res'); //seleciona a div pai
    const saida = document.createElement('li'); // cria a li

    btn.style.backgroundColor = 'green'

    div.appendChild(saida); // define a li como filha da div bloco
    saida.innerHTML = `${value}`; // passa o valor do input para o li

});

const deletar = document.querySelector('#del')

deletar.addEventListener("click", function (d) {
    d.preventDefault();

    const div = document.querySelector('.bloco_res'); //seleciona a div pai
    const rem = document.querySelector('#itens')

    deletar.style.backgroundColor = 'red'

    div.remove(rem)

});
