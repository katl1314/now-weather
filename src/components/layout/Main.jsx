import { Provider } from "react-redux";
import styled from "styled-components";
import Content from "../content/Content";
import store from "../../store/store";

function Main() {
    return (
        <Provider store={store}>
            <WrapContent>
                <Content />
            </WrapContent>
        </Provider>
    );
}

const WrapContent = styled.div`
    height: 100%;
    width: 100%;
`;
export default Main;
