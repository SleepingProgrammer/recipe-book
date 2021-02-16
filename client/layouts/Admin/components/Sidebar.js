import React from 'react';
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
    render() {
        return (<nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">
                            <i className="mdi mdi-home"></i> Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/products">
                            <i className="mdi mdi-file"></i> Orders
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/products">
                            <i className="mdi mdi-cart"></i>Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/products">
                            <i className="mdi mdi-account"></i>Customers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/products">
                            <i className="mdi mdi-file-chart"></i>Reports
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>);
    }
}