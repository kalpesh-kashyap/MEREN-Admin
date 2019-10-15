import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import routes from '../routes';
import Header from './Header';
import SideMenuBar from './SideMenuBar';
import Footer from './Footer';

// const Header = React.lazy(() => import('./Header'));
// const SideMenuBar = React.lazy(() => import('./SideMenuBar'));
// const Footer = React.lazy(() => import('./Footer'));
// const Dashboard = React.lazy(() => import('../components/Dashboard/Dashboard'));

class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid page-body-wrapper">
                    <SideMenuBar/>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Switch>
                                {
                                    routes.map((route, id) => {
                                        return route.component ? (
                                            <Route key={id}
                                                   path={route.path}
                                                   exact={route.exact}
                                                   name={route.name}
                                                   render={props => <route.component {...props}/>}/>
                                        ) : null
                                    })
                                }
                                <Redirect from="/" to="/dashboard"/>
                            </Switch>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;