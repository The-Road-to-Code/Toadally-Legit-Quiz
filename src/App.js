import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/UI/Header';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/common/UI/Footer';
import QuizContainer from './containers/QuizContainer';
import { ResultsContainer } from './containers/ResultsContainer';
import AboutContainer from './containers/AboutContainer';

function App() {
    const stateArray = [0, 2, 3];
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>
                    <Route exact path="/about" component={AboutContainer} />
                    <Route exact path="/quiz" component={QuizContainer} />
                    <Route exact path="/results">
                        <ResultsContainer resultsArr={stateArray} />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
