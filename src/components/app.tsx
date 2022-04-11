import { FunctionalComponent } from "preact";
import { Router, RouterOnChangeArgs } from "preact-router";
import Header from "./header";
import Home from "../routes/home";

const jApp: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs): void => {
        currentUrl = e.url;
        console.log(currentUrl);
    };

    return (
        <div id="app">
            <Header />
            <Router onChange={handleRoute}>
                <Home default />
            </Router>
        </div>
    );
};

export default App;
