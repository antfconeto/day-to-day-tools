import Routers from "./routes/routers";
import { BrowserRouter } from "react-router-dom"
import FooterComponent from "./components/footerComponent/Footer";

function App() {
    return (

        <BrowserRouter>
            <Routers></Routers>
            <FooterComponent></FooterComponent>
        </BrowserRouter>

    );
}

export default App;
