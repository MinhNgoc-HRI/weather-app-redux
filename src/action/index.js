import * as TYPE from '../const/index';


export const actionOneCall = (toado) => {
    return {
        type: TYPE.ONE_CALL,
        payload: toado
    }
}
export const actionOneCallSuccess = (data) => {
    return {
        type: TYPE.ONE_CALL_SUCCESS,
        payload: data
    }
}

export const actionWeather = (name) => {
    return {
        type: TYPE.WEATHER,
        payload: name
    }
}
export const actionWeatherSuccess = (data) => {
    return {
        type: TYPE.WEATHER_SUCCESS,
        payload: data
    }
}