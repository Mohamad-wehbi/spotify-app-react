import './Login.css';
import {BsSpotify} from 'react-icons/bs';
import { ContainerCenter } from '../../component/Containers/Containers';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { artistContext } from '../../component/Context/Context';

const Login = () => {

  const navicate = useNavigate();
  const {isToken} = useContext(artistContext);

  const CLIENT_ID = '40456890751f40dbb73bd6e4b377042a';
  const Redirect_URI = 'http://localhost:3000/';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  useEffect(() => isToken(navicate), []);


    return (
      <>
      <ContainerCenter>
            <a className='login' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${Redirect_URI}&response_type=${RESPONSE_TYPE}`}>Login <span className='icon'><BsSpotify /></span> </a>
      </ContainerCenter>
        
      </>
    );
  }
  
  export default Login;
  