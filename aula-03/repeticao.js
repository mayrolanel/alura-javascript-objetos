const cliente = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: ["+552877776666", "+552877776666"],
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES",
    saldo: 200,
    efetuarPagamento: function (valor) {
        if (valor > this.saldo) {
            return "saldo insuficiente!"
        }

        this.saldo -= valor;
        return `Pagamento realizado! saldo R$ ${this.saldo}`
    }
}
cliente.endereco = [
    {
        rua: "Barra Bonita",
        numero: "s/n",
        apartamento: true,
        complemento: "ap 934"
    }
];

cliente.endereco.push({
    rua: "R. joseph",
    numero: 404,
    apartamento: false,
    complemento: "Qd.25 L.15"
})

for (chave in cliente) {

    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} temo valor: ${cliente[chave]}`)
    }

}


const paciente = {
    nome: "James T.",
    idade: 30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao: "comandante",
    peso: 80.1,
    altura: 1.80,
    calcularIMC: function () {
        return (this.peso / (Math.pow(this.altura, 2)))
    },
    nomeCompleto: function () {
        console.log(this.nome)
    }
}

