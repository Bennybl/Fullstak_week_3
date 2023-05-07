import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <header>
            <ul>
                <div class="PageHeader">
                    <div class="PageHeader-left">

                        <li class="menu"><Link to="/">Home</Link></li>
                        <li class="menu"><Link to="/about">About me</Link></li>
                        <li class="menu"><Link to="/contact">Contact</Link></li>
                        <li class="menu"><Link to="/add">Add New Post</Link></li>
                        </div>
                        <div class="PageHeader-right">
                        <li class="menu"><Link to="/" class="PageHeader-right">Login</Link></li>
                        </div>
        
                </div>
            </ul>
        </header>
    )
}

export default Header