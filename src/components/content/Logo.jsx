import styled from "styled-components";

function Logo() {
    return (
        <h1 style={{ margin: 0, fontSize: "18px" }}>
            <A href="/">오늘의 날씨</A>
        </h1>
    );
}

const A = styled.a`
    text-decoration: none;
    color: lightsalmon;
`;

export default Logo;
