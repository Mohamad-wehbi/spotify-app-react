import './Search.css';
import {BsSearch} from 'react-icons/bs';
import { useContext, useEffect } from 'react';
import { ContainerCenter } from '../../component/Containers/Containers';
import { artistContext } from '../../component/Context/Context';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const {artistName, changeArtistName, changeToken}  = useContext(artistContext);
    const navicate = useNavigate();

    function loginArt(){
      let token = window.localStorage.getItem('token');
      let hash = window.location.hash;
  
      if(!token && hash){
        token = hash.slice(1).split('&').find(e => e.startsWith('access_token')).split('=')[1];
        window.location.hash = '';
        window.localStorage.setItem('token', token);
        changeToken(token);
  
      }
    }


    function getArtistName(v){
        if(artistName && v.key === 'Enter'){
          navicate('/Artists');
      }
    }

    const saveToken = () => changeToken(window.localStorage.getItem('token'));
      
   

   useEffect(() => loginArt, []);
   useEffect(() => saveToken ,[]);


    return (
      <>
      <ContainerCenter>
         <div className='search-art'>
             <input type='text' placeholder='Search for an artist...' onKeyUp={getArtistName} onChange={(v) => changeArtistName(v.target.value)} />
             <span className='icon'><BsSearch /></span> 
             <p>Click Enter when done</p>
         </div>
         
      </ContainerCenter>
      </>
    );
  }
  
  export default Search;
  