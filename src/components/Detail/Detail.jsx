import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Detail = () => {
    const history = useHistory();
    const movie = useSelector(store => store.detail)
    return (
        < div onClick={()=>{history.push('/')}}>
            <div>{movie.title}</div>
            <img src={movie.poster} />
            <br />
            <div>{movie.description}</div>
            <ul>Categories:
                {movie.category_array.map((category) => {
                    return <li key={category}>{category}</li>
                })}
            </ul>
            <h3>HERE IS A THING TO CLICK ON TO GO BACK, but not necessary</h3>

        </div>
    )
}

export default Detail;