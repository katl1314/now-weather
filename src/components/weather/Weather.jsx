import React from "react";
import styled from "styled-components";
import Container from "./Container";
import WeatherView from "./WeatherView";

function Weather(props) {
    return (
        <WrapDiv>
            <Container onClick={props.onClick} />
            <CityText>{props.city}의 날씨 정보</CityText>
            <WeatherView weatherData={props.data} />
        </WrapDiv>
    );
}

const WrapDiv = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
`;

const CityText = styled.div`
    font-size: 40px;
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: 20px 0;
`;

export default React.memo(Weather);
