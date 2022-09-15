import { Fragment } from "react";
import './style.css'

function Header() {
    return ( 
        <Fragment>
            <div id="header-conteiner">
                <h1 className="title">Pokédex</h1>
            </div>
        </Fragment>
     );
}

export default Header;