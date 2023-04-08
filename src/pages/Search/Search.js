import './Search.css';
import {BsSearch} from 'react-icons/bs';
import { useContext, useEffect } from 'react';
import { ContainerCenter } from '../../component/Containers/Containers';
import { artistContext } from '../../component/Context/Context';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const {artistName, changeArtistName, noToken}  = useContext(artistContext);
    const navicate = useNavigate();


    function getArtistName(v){
        if(artistName && v.key === 'Enter'){
          navicate('/Artists');
      }
    }

    useEffect(() => noToken(navicate) );


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
  