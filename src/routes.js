const listaHandles = require('./handlers/lista.js');
module.exports = [
    {
    method: 'GET',
    path: '/api/v1/lista',
    handler: listaHandles.getAll
    },
    {
        method: 'POST',
        path: '/api/v1/lista',
        handler: listaHandles.save
    },
];