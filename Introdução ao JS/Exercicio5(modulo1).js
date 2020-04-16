var usuarios = [
    {
        nome:"Diego",
        habilidades: ["JavaScript","ReactJs","Redux"]
    },
    {
        nome:"Gabriel",
        habilidades: ["VueJS","Ruby on rails","Elixir"]
    }
];

function habilidades(users){
    for(user in users){
        console.log(`O ${users[user].nome} possui as habilidades: ${users[user].habilidades}`)
    }
}


habilidades(usuarios)