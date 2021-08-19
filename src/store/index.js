import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather-slice';
import onecallReducer from './onecall-slice';
const store = configureStore({
    reducer: {
        weather: weatherReducer,
        onecall: onecallReducer
    },
})


export default store;