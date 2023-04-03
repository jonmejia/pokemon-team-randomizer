import { useState } from "react";

const Pokemon = () =>{
    const randomPokemon: number = Math.floor(Math.random()*151)
    const [pokemon, setPokemon] = useState(randomPokemon)

    const changePokemon = () =>{
        setPokemon(randomPokemon)
        console.log(pokemon)
    }

    return(
        <h1 onClick={changePokemon}>{pokemon}</h1>
    )
}

export default Pokemon