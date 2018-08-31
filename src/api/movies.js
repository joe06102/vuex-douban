export const fetchMoviesInTheater = (city, start, count) => {
    const url = `/movie/in_theaters?city=${city}&start=${start}&count=${count}`
    return fetch(url)
}