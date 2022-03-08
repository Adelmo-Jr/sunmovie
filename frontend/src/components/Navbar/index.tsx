import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

function Navbar(){
    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>SunMovie</h1>
                <a href="https://github.com/Adelmo-Jr" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/Adelmo-Jr</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;