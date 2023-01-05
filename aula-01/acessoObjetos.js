const cliente = {
    nome: 'Jose',
    idade: 32,
    cpf: 1122233345,
    email: 'exemplo@gmail.com'
}

console.log(cliente)

console.log(cliente.nome)
console.log(cliente["email"])

const chaves = ["nome", "idade", "email", "altura"];

chaves.forEach( (key) => {
    console.log(`A chave ${key} tem o valor ${cliente[key]}`)
})