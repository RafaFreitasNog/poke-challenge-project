import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import PokemonCard from "../pokemonCard";
import './style.css';


function CardsSection(props) {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const [pokeArray, setPokeArray] = useState([]);

    function handlePrevButtonClick() {
        if (prevUrl) {
            setUrl(prevUrl)
        }
    }

    function handleNextButtonClick() {
        if (nextUrl) {
            setUrl(nextUrl)
        }
    }
    
    useEffect(() => {
        async function loadPokemons() {
            await axios.get(url)
            .then(response => {
                setPokeArray(response.data.results)
                setNextUrl(response.data.next)
                setPrevUrl(response.data.previous)
            })
        }
        loadPokemons()
    }, [url])

    return (
        <Fragment>
            <div id="card-button-section" className="rounded">
                <div id="cards-conteiner">
                    {pokeArray.map((element) => 
                        <PokemonCard
                        key = {element.name}
                        name = {element.name}
                        />)}
                        <p>{nextUrl}</p>
                        <p>{prevUrl}</p>
                </div>
                <div id="buttons-conteiner">
                    <button
                    className="pagination-button rounded title"
                    onClick={handlePrevButtonClick}>
                        <h3>prev</h3>
                    </button>
                    <button
                    className="pagination-button rounded title"
                    onClick={handleNextButtonClick}>
                        <h3>next</h3>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default CardsSection;