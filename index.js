let moviesEndPoint = "now_playing"
let apiKey = "62e52ade14d1eeda71dbdcda989c0434"

const baseURL = `https://api.themoviedb.org/3/movie/${moviesEndPoint}?api_key=${apiKey}&language=en-US&page=1`
const nowPlayingUl = document.getElementById('now-playing')

let poster_path;
const posterUrl = `https://image.tmdb.org/t/p/w500`
//implement fetch on API

function getNowPlayingMovies (){
    fetch(baseURL)
    .then(resp => resp.json())
    .then(data => {
        const movies = data.results 
        let moviesArr = movies.map(movie =>
            {
                let movieObj = {
                    id : movie.id,
                    title : movie.title,
                    overview : movie.overview,
                    image : posterUrl + movie.poster_path,
                    vote_average : movie.vote_average
                }
                return movieObj
            }
        )
            console.log(moviesArr)
    })
}

getNowPlayingMovies()