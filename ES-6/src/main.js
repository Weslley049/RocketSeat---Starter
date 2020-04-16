import api from './api';


class App{
    constructor(){
        this.repositories = [];

        this.formEL = document.getElementById('repoForm');
        this.inputEL = document.querySelector('input[name=repository]')
        this.listEL = document.getElementById('repo-list');


        this.registerHandlers();  
    }

    registerHandlers(){
        this.formEL.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEL = document.createElement('span')
            loadingEL.appendChild(document.createTextNode('carregando'))
            loadingEL.setAttribute('id','loading');

            this.formEL.appendChild(loadingEL);
        }else{
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEL.value;

        if(repoInput.length === 0)
            return;
        
        this.setLoading();


    try{
            const response = await api.get(`/repos/${repoInput}`);

            const {name , description, html_url, owner: {avatar_url} } = response.data; 

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEL.value = '';

            this.render();
        }catch(err){
            alert('O repositorio não existe')
        }

        this.setLoading(false);
    }

    render(){
        this.listEL.innerHTML = '';

        this.repositories.forEach(repo =>{
            let imgEL = document.createElement('img');
            imgEL.setAttribute('src',repo.avatar_url);

            let titleEL = document.createElement('strong');
            titleEL.appendChild(document.createTextNode(repo.name));

            let descriptionEL = document.createElement('p');
            descriptionEL.appendChild(document.createTextNode(repo.description))

            let linkEL = document.createElement('a');
            linkEL.setAttribute('target','_blank');
            linkEL.setAttribute('href', repo.html_url)
            linkEL.appendChild(document.createTextNode('Acessar'));

            let listItemEL = document.createElement('li');
            listItemEL.appendChild(imgEL);
            listItemEL.appendChild(titleEL);
            listItemEL.appendChild(descriptionEL);
            listItemEL.appendChild(linkEL);

            this.listEL.appendChild(listItemEL);

        })
    }

    
}

new App();