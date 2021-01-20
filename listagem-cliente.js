const corpoTabela = document.querySelector("[data-conteudo-tabela]");

// Função que exibe os dados do cliente
const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>`;

    linha.innerHTML = conteudoLinha;

    return linha
}

// Iteração que passa pelo array de clientes e os insere
listarClientes().then( exibe => {
    exibe.forEach( indice => {
        corpoTabela.appendChild(exibeCliente( indice.cpf, indice.nome ))
    })
}

)