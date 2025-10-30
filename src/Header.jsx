import './App.css';

function Header() {
    return(
        <header>
            <div className="HDR-IMG-1">
                <a href="#">
                    <img src="/public/logo.svg" alt="Logo" width="50" height="50" />
                </a>
            </div>
            <nav>
                <ul id="HDR-NAV-LINKS">
                    <li>
                        <a href="#Shop">Shop All</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;