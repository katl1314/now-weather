import { createStore } from "redux";

const mapReducer = (state, action) => {
    if (!state) {
        const lat = 0;
        const lon = 0;
        const city = "-";
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
