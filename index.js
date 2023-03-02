var inputTarefas = document.getElementById("input-tarefas");
var listaTarefas = document.getElementById("lista-tarefas");
var btnAddTarefas = document.getElementById("btn-add-tarefas");
var idTarefa = 0;


btnAddTarefas.addEventListener("click", () => {
    if (inputTarefas.value != "") {
        idTarefa++;
        var li = document.createElement("li");
        li.id = idTarefa;
    li.innerHTML = `${inputTarefas.value} <button class="btn-remover" onclick="removerTarefa(event)" name=${idTarefa}>X</button>`;
    listaTarefas.appendChild(li);
    inputTarefas.value = "";
}
        else{
        alert("digite a tarefa")
    }


});

inputTarefas.addEventListener("keypress",(event)=>{
    if (event.key == "Enter"){
        if (inputTarefas.value != "") {
        idTarefa++;
        var li = document.createElement("li");
        li.id = idTarefa;
    li.innerHTML = `${inputTarefas.value} <button class="btn-remover" onclick="removerTarefa(event)" name=${idTarefa}>X</button>`;
    listaTarefas.appendChild(li);
    inputTarefas.value = "";
}
        else{
        alert("digite a tarefa")
    }
  
    }
}
);

function removerTarefa(event){
    var elementoParaRemover = document.getElementById(event.target.name)
    console.log(elementoParaRemover)
    elementoParaRemover.remove();
}

  
