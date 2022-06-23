import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Search";

function Container(props) {
    return (
        <WeatherContainer>
            <H2>어디 날씨가 궁금해요?</H2>
            <WeatherForm>
                <TextField
                    type="text"
                    name="search"
                    id="search"
                    variant="outlined"
                    size="small"
                />
                <Button
                    variant="contained"
                    size="medium"
                    onClick={() => {
                        const searchData =
                            document.getElementById("search").value;
                        props.onClick(searchData);
                    }}
                    endIcon={<SendIcon />}
                >
                    검색
                </Button>
            </WeatherForm>
        </WeatherContainer>
    );
}

const WeatherContainer = styled.div`
    width: 100%;
    background: lightblue;
`;

const WeatherForm = styled.div`
    position: relative;
    height: 75px;
    text-align: center;
`;

const H2 = styled.h2`
    font-size: 35px;
    text-align: center;
    line-height: 90px;
`;

export default Container;
