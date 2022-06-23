// import axios from "axios";

export default class Common {
    static setWeatherFetch(callback, url, city) {
        fetch(url)
            .then((result) => {
                if (!result.ok) {
                    throw new Error(`${result.status}`);
                }
                return result.json();
            })
            .then((data) => callback(city, data))
            .catch((err) => console.error(err));
    }
}
