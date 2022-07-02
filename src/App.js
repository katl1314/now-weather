import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </div>
    );
}

export default App;
