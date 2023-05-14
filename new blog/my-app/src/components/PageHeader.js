import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <header>
            <ul>
                <div className="PageHeader">
                    <div className="PageHeader-left">

                        <li className="menu"><Link to="/">Home</Link></li>
                        <li className="menu"><Link to="/about">About me</Link></li>
                        <li className="menu"><Link to="/contact">Contact</Link></li>
                        <li className="menu"><Link to="/add">Add New Post</Link></li>
                        </div>
                        <div className="PageHeader-right">
                        <li className="menu"><Link to="/login" className="PageHeader-right">Login</Link></li>
                        </div>
        
                </div>
            </ul>
        </header>
    )
}

export default Header