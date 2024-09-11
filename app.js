//console.log(dados); 
//console.log(dados[2].descricao);
//console.log(dados[0]); 

//<button onclick="pesquisar">Pesquisar</button>
function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");
    //console.log(section);

        //Se quer algo do HTML eu uso document
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //console.log(campoPesquisa);

    //Se o campo pesquisa for string sem nada
    if(campoPesquisa == ""){
        section.innerHTML = "<p>Você precisa digitar o nome de uma atlata ou esporte.!</p>"
        return 
        
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "" ;
    let titulo = "";
    let descricao = "";
    let tags = "";

    for(let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags - dado.tags.toLowerCase()
       //se titulo includes campopesquisa
       if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados +=`
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações de Rebeca</a>
        </div>
    `;

       }
    }
    if(!resultados){

        resultados = "<p>Nada foi encontrado sobre o assunto.</p>"
    }
    section.innerHTML = resultados;
}

