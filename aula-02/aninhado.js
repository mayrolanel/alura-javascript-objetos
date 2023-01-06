const cliente = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:["+552877776666","+552877776666"],
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
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
console.log(cliente)