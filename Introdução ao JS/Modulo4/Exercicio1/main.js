
function checaidade(idade){
    return new Promise(function(resolve,reject){
        if(idade > 18){
            setTimeout(5000)
            resolve();
        }else{
            setTimeout(5000)
            reject();
        }
    })
}

checaidade(17)
    .then(function(){
        console.log("Maior que 18")
    })
    .catch(function(){
        console.log("Menor que 18")
    });
