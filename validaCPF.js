function verificaCPF(cpf){
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    return cpfsInvalidos.indexOf(cpf) === -1
}

function somaNumerosCPF(cpf, totalDeDigitos, peso){
    let soma = 0;
    for(let indice = 1; indice <= totalDeDigitos; indice++){
        soma += parseInt(cpf.substring(indice - 1, indice)) * ( peso - indice)
    }

    return soma
}