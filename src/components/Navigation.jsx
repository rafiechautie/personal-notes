import { Link } from "react-router-dom";


function Navigation(){
    return(
        <header>
            <div className="logo">
                <Link to={'/'}>Personal Notes</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to={'/archive'}>Archive Notes</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Navigation;