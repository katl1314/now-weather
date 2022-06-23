import styled from "styled-components";
import Logo from "../content/Logo";
import Gnb from "./Gnb";

function Header(props) {
    return (
        <WrapHeader>
            <MyHeader>
                <Logo />
                <Gnb />
            </MyHeader>
        </WrapHeader>
    );
}

const WrapHeader = styled.div`
    height: 75px;
    min-width: 100%;
    background: #fff;
    line-height: 75px;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
`;

const MyHeader = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    position: relative;
`;
export default Header;
