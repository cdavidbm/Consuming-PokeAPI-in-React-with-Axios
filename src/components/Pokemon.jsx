import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {

    const [pokemon, setPokemon] = useState({});
    const [isDecimeters, setIsDecimeters] = useState(true);
    const [isHectograms, setIsHectograms] = useState(true);

    const changeUnits = () => {
        setIsDecimeters(!isDecimeters)
        setIsHectograms(!isHectograms)
    }

    const changePokemon = () => {
        const random = Math.floor(Math.random() * 600)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`).then((res) => {
            setPokemon(res.data);
        });
    }

    useEffect(() => {
        changePokemon();
    }, []);

    console.log(pokemon);
    return (
        <div>
            <h1>{pokemon.name}</h1>

            <img
                src={pokemon.sprites?.other["official-artwork"].front_default}
                style={{ height: "100px" }} />

            <div>
                <b>Type: </b>{pokemon.types?.[0].type.name}
            </div>

            <div>
                <br /> <hr />
                <b>weight: </b>
                {isHectograms ? pokemon.weight : pokemon.weight / 10}{" "}
                {isHectograms ? "hectograms" : "mekilogramsters"}

                <button onClick={() => setIsHectograms(!isHectograms)}>
                    Change to {isHectograms ? "hectograms" : "kilograms"}
                </button>
            </div>

            <div>
                <b>height: </b>
                {isDecimeters ? pokemon.height : pokemon.height / 10}{" "}
                {isDecimeters ? "decimeters" : "meters"}

                <button onClick={() => setIsDecimeters(!isDecimeters)}>
                    Change to {isDecimeters ? "meters" : "decimeters"}
                </button>
            </div>

            <hr />

            <button onClick={changeUnits}> <strong>CHANGE UNITS</strong> </button>
            <button onClick={changePokemon}> <strong>CHANGE POKEMON</strong> </button>
        </div>
    );
};

export default Pokemon;