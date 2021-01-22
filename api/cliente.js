// Função que busca os dados para exibir no html
const listarClientes = () => {
    // Acessando servidor, por padrão, o fetch  passa um get
    return fetch("http://localhost:4000/clientes")
        .then(resposta => {
            return resposta.json();
        })
        .then(json => {
            return json;
        })
}

const cadastrarClientes = (nome , cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf:cpf
    })
    return fetch("http://localhost:4000/clientes/cliente", {
        // Método/verbo utilizado para conexão com servidor
        method:'POST',

        // Cabeçalhos e tipos de dados que serão enviados ao servidor
        headers:{
            'Content-type': 'application/json'
        },

        // Contém os dados que serão enviados, no caso os dados do cliente
        body: json
    })
    .then( resp => {
        return resp.body;
    })
}


