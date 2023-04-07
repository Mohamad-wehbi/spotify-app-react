import './Album.css';
import img from '../../image/alb.jpg';


function Album({album}){

    return(
        <div className='album'>

            {album.album.images.length? <img src={album.album.images[0].url} /> : <img src={img} />}
            <div className='info-album'>

                <h2>{album.name}</h2>
                <p>{album.album.artists[0].name}</p>
                <p>{album.album.release_date}</p>
                <p>{`${album.album.total_tracks} Tracks`}</p>

            </div>

            <a target='_blank' href={album.album.external_urls.spotify} className='link'>Preview on Spotify</a>

        </div>
    )
}


export default Album;
