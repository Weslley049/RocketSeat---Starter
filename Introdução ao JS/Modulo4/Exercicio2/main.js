var btn = document.getElementById('botao')
var list = document.getElementById('result')


btn.onclick = function adicionar(usr){
    var usr = document.getElementById('user').value
    var minhaPromise = function(){
        return new Promise(function(resolve,reject){
            var xhr = new XMLHttpRequest();
            xhr.open('GET',`https://api.github.com/users/${usr}/repos`);
            xhr.send(null);
            var listElement = document.createElement('li')
            var textElement = document.createTextNode('carregando..')
            listElement.appendChild(textElement)
            list.appendChild(listElement)  
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject('Erro 404 (not found)')
                }
                
                }
            }
        });
    
    }
    minhaPromise()
    .then(function(response){
        
        list.innerHTML = ''
        for(rsp of response){
          var listElement = document.createElement('li')
          var textElement = document.createTextNode(rsp.name)
          listElement.appendChild(textElement)
          list.appendChild(listElement)   
        }
    })
    .catch(function(error){
        alert(error)
    });


}




