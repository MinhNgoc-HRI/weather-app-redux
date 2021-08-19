import {takeLatest,put,call} from 'redux-saga/effects';
import * as ACTION from '../action/index'
import * as TYPE from '../const/index'
import {getWeather,getOneCall} from '../api/index'
import { message} from "antd";

function* weatherSaga(action){
    try{
        const weatherRes =yield  call(getWeather,action.payload)
        if(!weatherRes.status === 200){
            //ADD MESSAGE
        }
        const data = weatherRes.data

        yield put(ACTION.actionWeatherSuccess(data))
    }catch (e){
        // ADD MESSAGE
        message.error('Không tìm thấy dữ liệu',3)
    }
}
function* onecallSaga(action){
    try{
        const {lat,lon} = action.payload
        const weatherRes =yield  call(getOneCall,{lat,lon})
        if(!weatherRes.status === 200){
            //ADD MESSAGE
        }
        const data = weatherRes.data
        message.success('Tìm kiếm thàn công', 3)
        yield put(ACTION.actionOneCallSuccess(data))
    }catch (e){
        // ADD MESSAGE
        message.error('Không tìm thấy dữ liệu',3)
    }
}

function* rootSaga() {
    yield takeLatest(TYPE.WEATHER,weatherSaga);
    yield takeLatest(TYPE.ONE_CALL,onecallSaga);
}

export default rootSaga;