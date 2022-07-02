import { createStore } from "redux";

const mapReducer = (state, action) => {
    if (!state) {
        const lat = 37.5666805;
        const lon = 126.9784147;
        const city = "서울";
        return {
            position: {
                lat,
                lon,
            },
            city,
            type: null,
        };
    }
    if (action.type === "change") {
        return { ...state, ...action };
    }
    return state;
};

export default createStore(mapReducer, null);
