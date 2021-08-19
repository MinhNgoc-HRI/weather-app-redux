import React, {Suspense} from "react";
import Loading from "./ui/Loading";
import './App.css';
import "antd/dist/antd.css";

const SearchWeather = React.lazy(() => import('./component/SearchWeather'));
const DetailWeather = React.lazy(() => import('./component/DetailWeather'));

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-xl-3 col-lg-3 col-md-12 col-xs-12 col-mn-12 p-4 bg-white">
                    <Suspense fallback={<Loading/>}>
                        <SearchWeather/>
                    </Suspense>
                </div>
                <div className="col col-xl-9 col-lg-9 col-md-12 col-xs-12 col-mn-12 p-4 bg-w h-90-vh">
                    <Suspense fallback={<Loading/>}>
                        <DetailWeather/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default App;
