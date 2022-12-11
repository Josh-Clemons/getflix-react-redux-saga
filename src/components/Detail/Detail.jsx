import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
    // useHistory for navigating back to movie list
    const history = useHistory();

    // sets detail from redux store to movie variable, state will update when
    // store is changed (triggered on click of list item in gallery)
    const [movie, setMovie] = useState(useSelector(store => store.detail))


    // used to set the user's view to the top of the page when detail view loads
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // returns all movie details for the clicked on movie, with a fixed back button
    // in the lower right, allowing users to return to movie list
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
            <div className="backButtonFixed btn btn-secondary" onClick={() => { history.push('/') }}>Go Back</div>

        </div>
    )
}

export default Detail;