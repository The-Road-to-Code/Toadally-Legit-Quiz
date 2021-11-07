import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/UI/Header';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/common/UI/Footer';
import QuizContainer from './containers/QuizContainer';
import { ResultsContainer } from './containers/ResultsContainer';
import AboutContainer from './containers/AboutContainer';
import { ResultsContextProvider } from './hooks/ResultsContextProvider';

function App() {
    return (
        <div className="App">
            <Router>
                <ResultsContextProvider>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <HomeContainer />
                        </Route>
                        <Route exact path="/about" component={AboutContainer} />
                        <Route exact path="/quiz" component={QuizContainer} />
                        <Route exact path="/results">
                            <ResultsContainer />
                        </Route>
                    </Switch>
                    <Footer />
                </ResultsContextProvider>
            </Router>
        </div>
    );
}

export default App;
