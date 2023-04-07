import './Navbar.css';
import Logout from '../Logout/Logout';
import { useEffect, useContext } from 'react';
import { artistContext } from '../Context/Context';

function Navbar(){


    const { token , changeToken } = useContext(artistContext);




    return(
        
        <header>
            <h2>Spotify Artist Search</h2>
            {token? <Logout /> : null}
        </header>
        
    );
}


export default Navbar;