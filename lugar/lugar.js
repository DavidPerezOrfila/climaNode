const axios = require('axios');

const getLugar = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}key=AIzaSyBs5ky-fPiM5i8qthWPy4I4Zz_SLXpsSeg`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la dirección: ${direccion}`);
    }

    let localizacion = resp.data.results[0];
    let address = localizacion.formatted_address;
    let coords = localizacion.geometry.location;
    /* console.log('Dirección: ', JSON.stringify(address, undefined, 2));
    console.log('Latitud: ', JSON.stringify(coords.lat, undefined, 2));
    console.log('Longitud: ', JSON.stringify(coords.lng, undefined, 2)); */
    return {direccion: address, lat: coords.lat, lng: coords.lng};
};

module.exports = {
    getLugar
}