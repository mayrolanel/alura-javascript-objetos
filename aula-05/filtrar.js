const clientes = require('./clientes.json')

function filtrarApartamentosSemComplementos(clientes) {
    return clientes.filter((cliente) => {
        return ( cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

const filtrados = filtrarApartamentosSemComplementos(clientes)

console.log(filtrados)