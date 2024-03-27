const express = require('express')
const axios = require('axios')
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 4000;

app.get('/movies', async (req, res) => {
    try {
        console.log('Hi')
        console.log('Received request with query:', req.query);
        const searchResults = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: process.env.API_KEY,
                include_adult: false,
                language: 'en-US',
                page: 1,
                query: req.query.search || "batman"
            }
        })
        const movies = searchResults.data.results.slice(0, 10).map(movie => ({
            movie_id: movie.id,
            title: movie.title,
            poster_image_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            popularity_summary: `${movie.popularity} out of ${movie.vote_count}`
        }));
        res.json(movies)
    } catch (e) {
        console.log(e)
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});