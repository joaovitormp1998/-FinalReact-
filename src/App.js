import Home from "./Home";
import Sobre from "./Sobre";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/sobre" component={Sobre} />
            </Switch>
        </Router>
    );
}

export default App;