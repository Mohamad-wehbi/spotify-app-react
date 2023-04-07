import './Rating.css';
import {FaStar} from 'react-icons/fa';
import {SlStar} from 'react-icons/sl'


function Rating({count}){


    return(
        <div>
            {[...Array(count)].map(el => <FaStar className='star' />)}
            {[...Array(5 - count)].map(el => <SlStar />)}
        </div>
    )
}


export default Rating;