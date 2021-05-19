
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import Movies from './screens/movies/Movies';
import Series from './screens/series/Series';


const Controller = () => {
    return (

        <Router>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Movies />} />
                <Route path="/series" render={() => <Series />} />
            </Switch>
        </Router>
    )
}

export default Controller;