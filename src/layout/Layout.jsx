import { Link } from "react-router-dom"

function Layout()
{
    return (
        <div>
            <nav>
                <Link to="">Dashboard</Link>
                <Link to="">Clients</Link>
                <Link to="">Property</Link>
                <Link to="">Listings</Link>
            </nav>
            <h1>HI</h1>
        </div>
    )
}

export default Layout;