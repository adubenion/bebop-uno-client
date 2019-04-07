import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
return <h2>Users</h2>;
}

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about/">About</Link>
                            </li>
                            <li>
                            <Link to="/users/">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/about/" exact component={About} />
                    <Route path="/users/" exact component={Users} />
                </div>
            </BrowserRouter>
        );
    }
}