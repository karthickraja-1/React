import { Link, Outlet } from "react-router-dom"

function Layout()
{
    return (
        <div>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/clients">Clients</Link>
                <Link to="/property">Property</Link>
                <Link to="/listings">Listings</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;