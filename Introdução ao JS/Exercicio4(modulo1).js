function experiencia(anos){
    if(anos<=1){
        return "iniciante"
    }else if(anos>1 && anos<=3){
        return "Intermediario"
    }else if(anos>3 && anos<=6){
        return "avançado"
    }else{
        return "Jedi master"
    }
}

anosEstudo = 7;
var valor = experiencia(anosEstudo)
console.log(valor)