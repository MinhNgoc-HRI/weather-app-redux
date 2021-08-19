import axiosService from "../service/axiosService";

const key = '80a9ad015d8ce64e904fc91dc142562c';
export const getWeather = (name) => {

    return axiosService.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=${key}`)
}

export const getOneCall = (toado) => {
    const {lat,lon} = toado
    return axiosService.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${key}`)
}