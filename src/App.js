import './assets/css/App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { routes } from "./routes";


function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, i) => <Route key={i} {...route} />)}
            </Routes>
        </Router>
    );
}

export default App;
