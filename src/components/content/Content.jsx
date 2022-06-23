import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import WeatherContainer from "../containers/WeatherContainer";

function Content() {
    return (
        <WrapContent>
            <Routes>
                <Route path="/" element={<WeatherContainer />}></Route>
                <Route path="/test" element={<WeatherContainer />}></Route>
            </Routes>
        </WrapContent>
    );
}

// 스타일드 컴포넌트
const WrapContent = styled.div`
    min-width: 100%;
    height: calc(100% - 70px);
    display: inline-block;
    position: relative;
`;

export default Content;
