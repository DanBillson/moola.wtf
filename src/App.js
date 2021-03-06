import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './layouts/Home';
// import Profile from './layouts/Profile';
import SignUp from './layouts/SignUp';
import SignIn from './layouts/SignIn';
import { header, footer } from './config/home';

const App = () => {
    return (
        <HashRouter>
            <>
                <Header header={header} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/profile" exact component={Profile} /> */}
                    <Route path="/signup" exact component={SignUp} />
                    <Route path="/signin" exact component={SignIn} />
                </Switch>
                <Footer footer={footer} />
            </>
        </HashRouter>
    );
};

export default App;
