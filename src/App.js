import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";

function App() {
    // 처음 현재 위치 정보(위도, 경도)를 받아서, store내 position state를 변경한다.
    window.navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        store.dispatch({
            position: {
                lat,
                lon,
            },
            type: "change",
            city: "인천",
        });
    });
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </div>
    );
}

export default App;
