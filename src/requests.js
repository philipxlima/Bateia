const API_KEY = "d53396f43dbe39b6ec2358d4ce8a53b2";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    fetchNetflixOriginals: `/discover/movie?with_genres=878,28,14,12&language=pt-BR&api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
    fetchComedyMovies: `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
    fetchHorrorMovies: `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
    fetchDocumentaries: `/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`
}

export default requests;