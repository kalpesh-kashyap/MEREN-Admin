import React, {Component} from 'react';
import Header from './Header';
import SideMenuBar from './SideMenuBar';
import Footer from './Footer';
import Dashboard from '../components/Dashboard/Dashboard';
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
                            <Dashboard/>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;