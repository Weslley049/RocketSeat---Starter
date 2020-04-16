var listElement = document.querySelector('#app ul')
var inputELement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function rendertodos(){
    listElement.innerHTML = '';
    
    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick',`deleteTodo(${pos})`)
        
        var textLink = document.createTextNode('Excluir');
        linkElement.appendChild(textLink);

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

rendertodos();


function adicionartodo(){
    var todoText = inputELement.value

    todos.push(todoText)
    inputELement.value = ''
    rendertodos();
    saveStorage();
}


buttonElement.onclick = adicionartodo;

function deleteTodo(pos){
    todos.splice(pos,1)
    rendertodos();
    saveStorage();
}


function saveStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
}