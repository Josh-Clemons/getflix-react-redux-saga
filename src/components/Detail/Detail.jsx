import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Detail = () => {
    const history = useHistory();
    const movie = useSelector(store => store.detail)
    return (
        <>
            <div>{movie.title}</div>
            <img src={movie.poster} />
            <br />
            <button onClick={()=>{history.push('/')}}>BACK</button>

        </>
    )
}

export default Detail;