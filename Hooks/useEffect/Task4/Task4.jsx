import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Task4 = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((response)=>{
            setPokemon(response.data.results);
        })
    },[])
  return (
    <div>
        <h1>pokemon</h1>
        {pokemon.map((items)=>{
            return (
                <div key={items.name} className='card'>
                   <img src={items.url} alt={items.name} />
                     <h2>{items.name}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default Task4