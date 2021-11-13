import React from 'react'
import '../styles/Character.css';

export default function Character({charInfo}) {
    return (
        <div class='container-character'>
            <h1>{charInfo.name.substring(0, 15)}</h1>
            <img src={charInfo.image} alt={charInfo.name}/>
        </div>
    )
}
