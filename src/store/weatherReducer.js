import { combineReducers} from 'redux';

import * as TYPE from '../const/index'


 const weatherReducer = (state ={},action) => {
    if(action.type === TYPE.WEATHER_SUCCESS){
        return {...action.payload}
    }
    return state
}
const onecallReducer = (state = {},action) => {
    if(action.type === TYPE.ONE_CALL_SUCCESS){
        return {...action.payload}
    }
    return state
}

const rootReducer = combineReducers({
    weatherReducer,
    onecallReducer
})

export  default rootReducer;