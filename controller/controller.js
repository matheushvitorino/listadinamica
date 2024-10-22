let input = document.getElementById('inputTarefa');
let btnAdd =document.getElementById('btnAdd');
let main = document.getElementById('areaLista')
let contador = 0;

function addTarefa(){
    //pega o valor do input
    let valorInput = input.value;


    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem = `<div  id ="${contador}" class="item">
            <div onclick="clicado(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>


            <div onclick="clicado(${contador})" class="item-nome">
                ${valorInput}
                
            </div>


            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>deletar</button>
            </div>

        </div>`;
    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;
    //ZERAR OS CAMPO
    input.value="";
    //FOCAR NO INPUT DE TEXTO APOS ADICIONAR A TAREFA E ZERAR O CAMPO
    input.focus();
    }
}
function clicado(id){
    var tarefa = document.getElementById(id); 
    classe = tarefa.getAttribute("class")

    if(classe == "item"){
        tarefa.classList.add('clicado');

        //mudar icone para check
        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle');

        tarefa.parentNode.appendChild(tarefa);

    }else{
        tarefa.classList.remove('clicado');

        //mudar icone para check
        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi mdi-check-circle')
        icone.classList.add('mdi mdi-circle-outline');
    }



}
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
// metodo para adicionar tarefa por tecla
input.addEventListener("keyup",function (event){
    if (event.key === 'Enter'){
        event.preventDefault();
        btnAdd.click();
    }

})

