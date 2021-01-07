import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import Home from "../routes/home";

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
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
