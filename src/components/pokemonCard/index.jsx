import { Fragment } from "react";
import './style.css'

function PokemonCard(props) {
    return ( 
        <Fragment>
            <div id="pokemon-card-div" className="rounded">
                <h3 className="white title">{props.name}</h3>
            </div>
        </Fragment>
     );
}

export default PokemonCard;