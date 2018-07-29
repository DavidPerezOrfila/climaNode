const axios= require ('axios');
const getClima = async (lat , lng) => {
let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a73028f675b5e2ba3afdcd7e684f477b`)
    if (resp.data.code === 401) {
        throw new Error(`Invalid API key`);
    }
    if (resp.data.code === 400) {
        throw new Error(`Is not a geocode`);
    }

    let temp = resp.data.main.temp;
    return temp;
}


module.exports= {
    getClima
}