import React from 'react';
import {Link} from "react-router-dom";

const SideMenuBar = props => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <a href="#" className="nav-link">
                        <div className="nav-profile-image">
                            <img src={require("../assets/images/faces/face1.jpg")} alt="profile"/>
                            <span className="login-status online"/>
                        </div>
                        <div className="nav-profile-text d-flex flex-column">
                            <span className="font-weight-bold mb-2">David Grey. H</span>
                            <span className="text-secondary text-small">Project Manager</span>
                        </div>
                        <i className="mdi mdi-bookmark-check text-success nav-profile-badge"/>
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <span className="menu-title">Dashboard</span>
                        <i className="mdi mdi-home menu-icon"/>
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        <span className="menu-title">Login</span>
                        <i className="mdi mdi-home menu-icon"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false"
                       aria-controls="ui-basic">
                        <span className="menu-title">Basic UI Elements</span>
                        <i className="menu-arrow"/>
                        <i className="mdi mdi-crosshairs-gps menu-icon"/>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"><a className="nav-link"
                                                        href="pages/ui-features/buttons.html">Buttons</a></li>
                            <li className="nav-item"><a className="nav-link"
                                                        href="pages/ui-features/typography.html">Typography</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/icons/mdi.html">
                        <span className="menu-title">Icons</span>
                        <i className="mdi mdi-contacts menu-icon"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/forms/basic_elements.html">
                        <span className="menu-title">Forms</span>
                        <i className="mdi mdi-format-list-bulleted menu-icon"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/charts/chartjs.html">
                        <span className="menu-title">Charts</span>
                        <i className="mdi mdi-chart-bar menu-icon"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/tables/basic-table.html">
                        <span className="menu-title">Tables</span>
                        <i className="mdi mdi-table-large menu-icon"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapse" href="#" >
                        <span className="menu-title">Sample Pages</span>
                        <i className="menu-arrow"/>
                        <i className="mdi mdi-medical-bag menu-icon"/>
                    </a>
                    <div className="collapse" id="general-pages">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"><a className="nav-link" href="pages/samples/blank-page.html"> Blank
                                Page </a></li>
                            <li className="nav-item"><a className="nav-link" href="pages/samples/login.html"> Login </a>
                            </li>
                            <li className="nav-item"><a className="nav-link"
                                                        href="pages/samples/register.html"> Register </a></li>
                            <li className="nav-item"><a className="nav-link"
                                                        href="pages/samples/error-404.html"> 404 </a></li>
                            <li className="nav-item"><a className="nav-link"
                                                        href="pages/samples/error-500.html"> 500 </a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    )
};

export default SideMenuBar;