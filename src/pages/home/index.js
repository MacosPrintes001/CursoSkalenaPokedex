import React, { useState, useEffect } from "react"
import Background from "../../components/Background"
import Navbar from "../../components/Navbar"
import PokemonCard from "../../components/PokemonCard"
import api from "../../services/api"
import { CardContainer } from "./styles.js"



function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonInfo, setpokemonInfo] = useState([]);


    // const handleGetPokemonStatus = (pokemons) => {
    //     try {
           
          
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    const handleGetPokemonName = async () => {
        try {
            setIsLoading(true);

            const response = await api.get('pokemon', {
                params: { limit: 10 }
            })

            if (response) {
                setPokemonName(response.data.results);
                handleGetPokemonStatus(response.data.results);
            }

        } catch (error) {
            console.error(error)

        }
    }


    useEffect(() => {
        console.log("Tela rodando");
        handleGetPokemonName();
    }, [])
    return (
        <div>
            <Navbar />
            <Background />
            <CardContainer>
                {
                    isLoading? 'Loading...': <></>
                }
                {
                    pokemonName.map((pokemon, index)=>
                        (<PokemonCard code={pokemonInfo[index]?.id} name={pokemon.name} src={pokemonInfo[index].sprite.other['ifficial-artwork'].front_default}></PokemonCard>)
                    )
                }
                <PokemonCard />
            </CardContainer>
        </div>
    )
}

export default Home