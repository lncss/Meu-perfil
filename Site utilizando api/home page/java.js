function perfil (){
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        // alert("Retorno da requisição" + this.responseText);
        let obj = JSON.parse(this.responseText);

        let perfilStr = `<div class="card" style="width: 18rem;">
                        <img src="${obj.avatar_url}" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">${obj.name} <br> (${obj.login})</h5>
                        <p class="card-text">${obj.bio}</p>
                        <a href="${obj.html_url}" class="btn btn-primary" target="blank">Perfil</a>
                        </div>
                    </div>`;   

        document.getElementById('tela').innerHTML = perfilStr; 
    }       
    
    xhr.onerror = function () {
        alert(`Erro na requisição\n Coódigo: ${this.status} + ${this.statusText}`);
    }
    xhr.open('GET','https://api.github.com/users/lncss');
    xhr.send();

 
    let hr = new XMLHttpRequest();

    hr.onload = function () {
        // alert("Retorno da requisição" + this.responseText);
        let texto = JSON.parse(this.responseText);
        console.log(texto);

        let repos = '';
             
        for(x = 0; x != texto.length; x++){
            let rep = texto[x];
            let desc;
            if (rep.description == null) desc = "Nenhuma descrição fornecida"; 
            else desc = rep.description;

            repos += `<div class="card" >
            <div class="card-body">
            <h5><b>Repositórios</b></h5>
            <p>Nome: ${rep.name} </p>
            <p>Descrição: ${desc} </p>
            <p>Saiba mais: <a href= ${rep.html_url}>link</a></p>
            </div>
            </div>`; 
        }
                          
        document.getElementById('repositorios').innerHTML = repos;
    }
         
    
    hr.onerror = function () {
        alert(`Erro na requisição\n Coódigo: ${this.status} + ${this.statusText}`);
    }
    hr.open('GET',`https://api.github.com/users/lncss/repos`);
    hr.send();
}

let xhr;
function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;

    xhr = new XMLHttpRequest ();

    xhr.onload = exibeUsuarios;
    xhr.open ('GET', `https://api.github.com/users/${query}`);
    xhr.send();

}
document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);  

function exibeUsuarios(){ 
    console.log(xhr.status);

    let data = JSON.parse(this.responseText);

    let usuario = `<div class="box-noticia">
    <p><b>Resultados:</b></p>
    <img src="${data.avatar_url}"><br>
    <span class="titulo">${data.name}</span><br>
    <span class="texto"><a href="${data.html_url}">Leia Mais</a>
    </span> 
    </div>`;   

    document.getElementById('links').innerHTML = usuario; 

    console.log(data);
} 

