import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Home.css';

import About from '../about/About';
import Employee from '../employee/Employee';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to = "/" >Home</Link>
                        <Link to = "/About" >About</Link>
                        <Link to = "/Employee" >Employee</Link>
                    </div>

                    <Route path = "/" exact Component = {Home} />
                    <Route path = "/About" component = {About} />
                    <Route path = "/Employee" component = {Employee} />

                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;