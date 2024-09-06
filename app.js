function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "Por favor, digite um nome de filme para pesquisar";
        return
    }
    console.log(campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = ""
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <img src="${dado.poster}"
                    alt="poster de ${dado.titulo}">
                    <div>
                        <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <p class="ano">${dado.ano}</p>
                        <p class="diretor">${dado.diretor}</p>
                    </div>
                </div>
        `;
        }

    }

    if (!resultados) {
        resultados = "Nenhum resultado encontrado"
    }
    section.innerHTML = resultados;
}

//console.log(nomeFilme);

