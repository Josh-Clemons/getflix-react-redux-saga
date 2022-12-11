import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import AddMovieModal from '../AddMovieModal/AddMovieModal';




function MovieList() {
    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const movieClick = (movie) => {
        // console.log('in movieClick, movie: ', movie);
        dispatch({ type: 'SET_DETAIL', payload: movie })
        history.push('/detail');
    }



    return (
        <main className='movieListMain'>
            <h2>Movie Library</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => movieClick(movie)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
                <AddMovieModal />
            </section>
        </main>

    );
}

export default MovieList;