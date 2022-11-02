import { Link } from 'react-router-dom';
import './navbar.scss'
function Navbar() {
    return ( 
        <nav>
            <Link to='/'><h1>Navbar</h1></Link>
            <div className="app">
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;