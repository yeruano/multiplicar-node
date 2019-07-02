let config = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', config)
    .command('crear', 'Crar en un archivo externo una tabla de multiplicar', config)
    .help()
    .argv;

module.exports = {
    argv
};