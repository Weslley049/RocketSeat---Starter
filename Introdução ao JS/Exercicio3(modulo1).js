function temHabilidade(skils){
    for(skill in skills){
        if(skills[skill] === "JavaScript"){
            return true;
        }
    }
    return false;
}


var skills = ["Java","ReactJs","React Native"];

var bool = temHabilidade(skills)
console.log(bool)