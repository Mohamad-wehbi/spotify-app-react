import './Albums.css';
import { ContainerRow } from '../../component/Containers/Containers';
import Album from '../../component/Album/Album';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { artistContext } from '../../component/Context/Context';
import { useState, useEffect, useContext } from 'react';


function Albums(){

    const artistId = useParams();
    const navicate = useNavigate();
    const [ albums ,setAlbums ] = useState([]);
    const {token, noToken} = useContext(artistContext);

    async function getAlbumsById(){

        try{
            const {data} = await axios.get( `https://api.spotify.com/v1/artists/${artistId.id}/top-tracks` , {
                           headers:{ Authorization: `Bearer ${token}` },
                           params:{ limit: 12, market: 'US' }

                        });

            setAlbums(data.tracks);

          }catch(r){ console.log('Not Found') }
    }

    useEffect( () => getAlbumsById , [] );
    useEffect( () => noToken(navicate) );

    const renderAlbums = () => albums.map((el, index) => <Album key={index} album={el}/>);

    return(

        <div className='con-albums'>
            <div className='header'>
                   <h2>{artistId.name}</h2>
                   <p>Albums</p>
            </div>
            
            <ContainerRow>
                  {renderAlbums()} 
            </ContainerRow>

        </div>

        

    );
}


export default Albums;