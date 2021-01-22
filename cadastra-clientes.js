const formCadastroCliente = document.querySelector("[data-form]");

formCadastroCliente.addEventListener('submit', event => {
    // Prevenindo o comportamento padrão do formulario
    event.preventDefault();

    // Selecionando os campos do formulario
    const nome = event.target.querySelector("[data-nome]");
    const cpf = event.target.querySelector("[data-cpf]");

    cadastrarClientes(nome.value, cpf.value)

})