import './Logout.css';
import { useContext } from 'react';
import { artistContext } from '../Context/Context';


function Logout(){

    const {changeToken} = useContext(artistContext);

    function logoutArt(){
        window.localStorage.removeItem('token');
        changeToken('');
      }

    return(
        <button onClick={ () => logoutArt() } className='logout'>Logout</button>
    )
}


export default Logout;