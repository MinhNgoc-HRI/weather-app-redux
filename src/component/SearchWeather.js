import {Fragment, useCallback, useEffect, useMemo, useRef} from "react";
import {useDispatch,useSelector,shallowEqual} from 'react-redux';
// import {fetchWeather} from '../store/weather-slice'
import * as ACTION from '../action/index'
import Loading from "../ui/Loading";
import rainimg from "../icon/rain.jpg";
import classes from "./SearchWeather.module.css";
let init = true;
const SearchWeather = props => {
    const weather = useSelector(state=>state.weatherReducer,shallowEqual);
    const dispatch = useDispatch();
    const searchInputRef = useRef();
    useEffect(()=>{
    if(init){
        dispatch(ACTION.actionWeather('nam dinh'));
        init = false
    }
    },[dispatch])

    const submitHandler = useCallback(e =>{
        e.preventDefault();
        const value = searchInputRef.current.value;
        if (value.trim().length === 0) {
            return;
        }
        dispatch(ACTION.actionWeather(value));
        searchInputRef.current.value = '';
    },[dispatch])
    const day = useMemo(()=>new Date(Date.now())
        .toLocaleDateString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        })
        .replace(" ", ", "),[])
    return useMemo(()=> {

        return (
            (
                <Fragment>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <input
                            className={classes["form-control"]}
                            type="text"
                            placeholder="Search"
                            title="Press city name then Enter"
                            ref={searchInputRef}
                        />
                    </form>
                    {weather.weather ? (
                        <>
                            <img
                                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                                alt=""
                                style={{ width: "15rem", height: "auto" }}
                            />
                            <div className="fs-2 fw-bold">{weather.name}</div>
                            <div className="fs-1 fw-bold">
                                {Number.parseInt(weather.main.temp)}&#8451;
                            </div>
                            <div className="fs-5 ">{day}</div>
                            <div className="fs-5 cl-1 mg-b-1">
                                Overcast Clouds
                                <br />
                                Clouds {weather.clouds.all}%
                            </div>
                            <div className="ps-r jus-cen alg-cen flex">
                                <div className="ps-a cl-white fs-2 fw-bold">{weather.name}</div>
                                <img alt="" src={rainimg} className={`${classes.img} bdr`} />
                            </div>
                        </>
                    ) : (
                        <Loading />
                    )}
                </Fragment>
            )
        )
    },[day,submitHandler,weather.clouds?.all,weather.main?.temp,weather.name,weather.weather]
    )
}

export  default SearchWeather