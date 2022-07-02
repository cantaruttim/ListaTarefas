const btn = document.querySelector('#send');

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector('#tarefa');
    const value = name.value;

    const div = document.querySelector('.bloco_res'); //seleciona a div pai
    const saida = document.createElement('li'); // cria a li
    div.appendChild(saida); // define a li como filha da div bloco
    saida.innerHTML = `${value}`; // passa o valor do input para o li

    console.log(value);

});

/* 
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

*/ 