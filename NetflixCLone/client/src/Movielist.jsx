import React, { useEffect, useState } from 'react';

function Movielist() {
    const [movies, setMovies] = useState([]); // Initialize as an array


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/movies');
                const data = await response.json();
                console.log(data); // Log the fetched data
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };
        

        fetchMovies();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {movies.map((movie) => (
                <div key={movie.id} className="border rounded-lg p-4">
                    <img src={movie.imageUrl} alt={movie.title} className="w-full h-auto rounded-lg" />
                    <h3 className="font-bold">{movie.title}</h3>
                    <p>{movie.description}</p>
                    <p className="text-sm text-gray-600">{movie.releaseYear} | {movie.genre}</p>
                </div>
            ))}
        </div>
    );
}

export default Movielist;
