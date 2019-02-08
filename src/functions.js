export const fetchMovies = async (func) => {
    try {
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=game`);
        const responseJson = await response.json();
        await func(responseJson)

    } catch (e) {
        console.log('erroe', e);
    }
};