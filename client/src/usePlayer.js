import React, {useEffect, useState} from "react";
import axios from 'axios';

export function usePlayer(playerName) {

    const[player,setPlayer] = useState(null)
    const[error,setError] = useState(null)
    const[isloading,setIsLoading] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/players`)
            .then(response => {
                console.log(response);
            })
    })

    return{player,error,isloading}
}