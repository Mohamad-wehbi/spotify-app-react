import { useState, createContext } from "react";

const artistContext = createContext();

function UseContextProvider({children}){

    const [artistName, setArtistName ] = useState('');
    const [token, setToken] = useState('');

    function changeToken(v){
        setToken(v);
    }

    function changeArtistName(value){
        setArtistName(value);
    }


    function isToken(navigate){
        setToken(window.localStorage.getItem('token'));
        if(token){
            navigate('/search');
        }
    }

    function noToken(navigate){
        setToken(window.localStorage.getItem('token'));
        if(!token){
            navigate('/');
        }
    }
   

    return(

        <artistContext.Provider value={{ artistName, changeArtistName, token, changeToken, isToken, noToken }}>
            {children}
        </artistContext.Provider>

    )
}


export {artistContext, UseContextProvider};
