const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
    direccion: {
        alias: 'd',
        descripcion: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
})
    .argv;

let getInfo = async(direccion) => {
    let coords = await lugar.getLugar(direccion);
    let temp = await clima.getClima(coords.lat, coords.lng);

    return `El clima en ${coords.direccion} es de ${temp}ºC`;
}

getInfo(argv.direccion)
.then(resp => console.log(resp))
.catch(e => console.log('ERROR!!!', e))
