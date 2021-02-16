import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom'
import NavLink from "./NavLink";

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPath: ""
        };

        this.routes = [
            {
                route: "/admin",
                text: "Dashboard",
                icon: "home"
            },
            {
                route: "/admin/products",
                text: "Products",
                icon: "cart"
            },
            {
                route: "/admin/orders",
                text: "Orders",
                icon: "file"
            },
            {
                route: "/admin/customers",
                text: "Customers",
                icon: "account"
            },
            {
                route: "/admin/reports",
                text: "Reports",
                icon: "file-chart"
            }
        ]
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({
            currentPath: this.props.location.pathname
        });
    }

    render() {
        const SidebarLinks = this.routes.map((link) => {

            const active = this.state.currentPath == link.route;
            return (<NavLink active={active} route={link.route} text={link.text} icon={link.icon} key={"NavLink/" + link.route} />)
        });

        return (<nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    {SidebarLinks}
                </ul>

            </div>
        </nav>);
    }
}



export default Sidebar = function () {
    const location = useLocation();
    return <SidebarComponent location={location} />
}