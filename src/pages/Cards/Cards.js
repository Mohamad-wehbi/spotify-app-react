import './Cards.css';
import Card from '../../component/Card/Card';
import { useState, useContext, useEffect } from 'react';
import {BsSearch} from 'react-icons/bs';
import { ContainerRow } from '../../component/Containers/Containers';
import { artistContext } from '../../component/Context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Cards(){

    const {artistName, changeArtistName, token, noToken }  = useContext(artistContext);
    const [artists, setArtists] = useState([]);
    const navicate = useNavigate();

    async function getArtistByname(){

        try{
            const {data} = await axios.get("https://api.spotify.com/v1/search" ,{
            headers:{
                Authorization: `Bearer ${token}`,
            },
            params:{
                q: artistName,
                type: 'artist' 
            }
        })  
        setArtists(data.artists.items);
       
        }catch(r){console.log('Not Found')}     
    }


    useEffect(() => getArtistByname, [artistName]);
    useEffect(() => noToken(navicate));

    const renderArtists = () => artists.map((el, index) => <Card key={index} artist={el}/>);
    
    return(
        
        <div className='con-cards'>
            <div className='search'>
               <input type='text' placeholder='Search for an artist...' value={artistName} onChange={v => changeArtistName(v.target.value)} />
               <span className='icon'><BsSearch /></span> 
            </div>
            <ContainerRow>        
                {artists.length ? renderArtists() : <h1 style={{'color': '#000'}}>Not Found</h1>}   
           </ContainerRow>
        </div>

        
    )
}


export default Cards;


