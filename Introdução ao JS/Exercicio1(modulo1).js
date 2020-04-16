var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro:"centro",
    cidade:"Sao paulo",
    uf:"SP"

};

function retornaString(endereco){
    return `o usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua 
    "${endereco.rua}" com nº ${endereco.numero}.`
}

string = retornaString(endereco)
console.log(string)