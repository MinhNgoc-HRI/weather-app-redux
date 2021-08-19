//REACT
import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash'
// import {fetchOneCall} from '../store/onecall-slice';
import * as ACTION from '../action/index'
import Loading from "../ui/Loading";
import Today from "./Today";
import Week from "./Week";
import Hour from "./Hour";
import hans from '../icon/hans.jpeg';





const DetailWeather = props => {
    const onecall = useSelector(state => state.onecallReducer,_.isEqual);
    const weather = useSelector(state => state.weatherReducer,_.isEqual);
    const dispatch = useDispatch();
    const [li, setLi] = useState(0);
    useEffect(() => {
        if (Object.keys(weather).length !== 0) {
            let {lat, lon} = weather.coord;
            dispatch(ACTION.actionOneCall({lat,lon}));
        }
    }, [dispatch, weather])
    const clickHandler = useCallback((e) => {
        setLi(+e.currentTarget.dataset.id);
    }, [])
    const arr = useMemo(() => ["Today", "Week", "Hour"], []);
    return useMemo(()=>
    {
        return (
            <>
                <div className="flex jus-bet alg-cen">
                    <ul className="nav flex alg-cen jus-str fs-5">
                        {arr.map((v, i) => (
                            <li
                                onClick={clickHandler}
                                key={i}
                                data-id={i}
                                className={`mg-r-1 cur ${i === li ? "bor-b" : ""}`}
                            >
                                {v}
                            </li>
                        ))}
                    </ul>
                    <img className="round-50" src={hans} alt=""/>
                </div>
                {Object.keys(onecall).length === 0 && <Loading/>}
                {li === 0 && Object.keys(onecall).length !== 0 && (
                    <Today data={onecall}/>
                )}
                {li === 1 && Object.keys(onecall).length !== 0 && (
                    <Week data={onecall}/>
                )}
                {li === 2 && Object.keys(onecall).length !== 0 && (
                    <Hour data={onecall}/>
                )}
            </>
        )
    },[clickHandler,li,onecall,arr])
}

export default React.memo(DetailWeather);