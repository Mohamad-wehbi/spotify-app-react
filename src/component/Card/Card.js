import './Card.css';
import Rating from '../../component/Rating/Rating';
import { Link } from 'react-router-dom';
import img from '../../image/alb.jpg';

const arr = [1, 2, 3, 4, 5];

function Card({artist}){
    return(
        <Link to={`/Albums/${artist.name}/${artist.id}`} className='card'>

            { artist.images.length ? <img src={artist.images[0].url} /> : <img src={img} /> }

            <div className='info-art'>
                <h2>{artist.name}</h2>
                <p>{`${artist.followers.total} Followers`}</p>

                <Rating  count={arr[Math.floor( Math.random() * arr.length )]}/>
            </div>

        </Link>
    )
}


export default Card;