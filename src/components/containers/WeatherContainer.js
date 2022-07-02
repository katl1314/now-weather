import { useState, useEffect } from "react";
import Common from "../../comm/common";
import Weather from "../weather/Weather";
import store from "../../store/store";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const [weatherData, setWeatherData] = useState({
        city: store.getState().city,
        data: {},
    });
    const weatherURL = "https://api.openweathermap.org/data/2.5/weather";

    const onClick = (searchData) => {
        let places = new window.kakao.maps.services.Places();
        let callback = function (result, status) {
            if (status === "OK") {
                const { x, y } = result[0];
                const lon = Number(x); // 경도
                const lat = Number(y); // 위도

                store.dispatch({
                    city: searchData,
                    position: {
                        lat,
                        lon,
                    },
                    type: "change",
                });
            }
        };
        // 키워드 검색하여 해당 지역의 위도와 경도를 추출후 store에 변경한다.
        places.keywordSearch(searchData, callback);
    };

    const setFetchCallback = (city, data) => {
        setWeatherData({ city, data });
    };

    // 초기 위치의 날씨 정보 취득 componentDidMount
    useEffect(() => {
        // store.subscribe는 componentDidMount에 작성하지 않으면 계속 호출됨.
        store.subscribe(() => {
            const { position, city } = store.getState();
            const { lat, lon } = position;
            const url = `${weatherURL}?lat=${lat}&lon=${lon}&lang=kr&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
            Common.setFetch(setFetchCallback, url, city);
        });

        const { position, city } = store.getState();
        const { lat, lon } = position;
        const url = `${weatherURL}?lat=${lat}&lon=${lon}&lang=kr&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
        Common.setFetch(setFetchCallback, url, city);
    }, []);

    return (
        <Weather
            data={weatherData.data}
            city={weatherData.city}
            onClick={onClick}
        />
    );
}
