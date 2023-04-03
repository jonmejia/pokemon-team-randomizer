import { useState } from "react";

const Pokemon = () =>{
    const randomPokemon: number = Math.floor(Math.random()*151)+1
    const [pokedexNumber, setPokemon] = useState(randomPokemon)

    const changePokemon = () =>{
        setPokemon(randomPokemon)
        console.log(pokedexNumber)
    }

    return(
        <h1 onClick={changePokemon}>{pokedexNumber}</h1>
    )
}

export default Pokemon