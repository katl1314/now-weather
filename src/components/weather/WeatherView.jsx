import Card from "../content/Card";
import styled from "styled-components";

function WeatherView({ weatherData: { main, wind } }) {
    const newObject = Object.assign({}, { ...main }, { ...wind });
    return (
        <div>
            <CardView>
                <Card
                    data={newObject}
                    label={{
                        temp: "현재 온도",
                        feels_like: "체감 온도",
                        temp_max: "최고 온도",
                        temp_min: "최저 온도",
                        speed: "풍속",
                        deg: "바람각도",
                    }}
                />
            </CardView>
        </div>
    );
}

const CardView = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
}
`;
export default WeatherView;
