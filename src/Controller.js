import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './Movies';
// import Movies from './screens/movies/Movies';
import Series from './screens/series/Series';


const Controller = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Movies/>}/>
                <Route path="/series" render={() => <Series/>}/>
            </Switch>
        </Router>
    )
}

export default Controller;