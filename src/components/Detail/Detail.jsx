import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
    const history = useHistory();
    const movie = useSelector(store => store.detail)

    useEffect(()=> {
        window.scrollTo(0,0)
    }, []);

    return (
        < div className="detailDiv">
            <h2>{movie.title}</h2>
            <img src={movie.poster} />
            <br />
            <div className='movieDetailDiv'><span>Movie Details: </span>{movie.description}</div>
            <ul><b>Categories:</b>
                {movie.category_array.map((category) => {
                    return <li key={category}>{category}</li>
                })}
            </ul>
            <div className="backButtonFixed" onClick={()=>{history.push('/')}}>Go Back</div>

        </div>
    )
}

export default Detail;