
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import DetailsScreen from './screens/detailsScreen/DetailsScreen';
import Movies from './screens/movies/Movies';
import Series from './screens/series/Series';


const Controller = () => {
    return (

        <Router>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Movies />} />
                <Route path="/movies/:movieId" render={() => <DetailsScreen/>}/>
                <Route path="/series" render={() => <Series />} />
            </Switch>
        </Router>
    )
}

export default Controller;