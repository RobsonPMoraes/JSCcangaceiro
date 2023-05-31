// criando um array campos quer armazenará uma referência para cada um dos elementos de entrada do formulário
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log (campos); // verificando o conteúdo do array

// vamos buscar o tbody que receberá a tr que vamos construir
var tbody = document.querySelector('table tbody');

// na classe form, adicionamos um addEventListener ao botão submit, criando uma função que vai criar o elemento tr no tbody
document.querySelector('.form').addEventListener('submit', function (event){
    // cancelando o evento submit, ou seja, a submissão do formulário
    event.preventDefault();

    var tr = document.createElement('tr');
    campos.forEach(function(campo){
        // cria uma td sem informações
        var td = document.createElement('td');
        // atribui o valor do campo à td
        td.textContent = campo.value;
        // adiciona a td na tr
        tr.appendChild(td);
    }); // forEach end

// nova id que armazenará o volume da negociação
var tdVolume = document.createElement('td');

// as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
tdVolume.textContent = campos[1].value * campos[2].value;

// adicionando a td que faltava à tr
tr.appendChild(tdVolume);

// adicionando a tr
tbody.appendChild(tr);
});

