function success () {
    let obj = JSON.parse(this.responseText);
    let texto = `<p>Nome: ${obj.name}<br>
                Biografia: ${obj.bio}<br>
                Repositorios:${obj.publi_repos}<br>
                Link:<a href="${obj.html_url}" target = "blank"> Github</a> <br>
                <a href="https://www.instagram.com" target="blank"><img src="images/instagramlogo.png" id="insta"></a> 
                <a href="https://mobile.twitter.com" target="blank"><img src="images/twitter-logo-1.png" id="twitter"></a></p>`
    document.getElementById('tela').innerHTML = texto;
    //console.log(JSON.parse(this.responseText));

    let mostra = `${obj.avatar_url}`;
   
}
function error () {console.log('Erro',err);}

var xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open('GET', 'https://api.github.com/users/lncss');
xhr.send();
 
