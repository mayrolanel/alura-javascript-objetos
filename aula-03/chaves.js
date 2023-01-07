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

const chavesDoObjeto = Object.keys(cliente)
let hasChave = chavesDoObjeto.includes("endereco")

if(!hasChave) {
    console.error("Error. É necessário ter um endereço cadastrado")
}

console.log(chavesDoObjeto)

for (chave in cliente) {

    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} temo valor: ${cliente[chave]}`)
    }

}
