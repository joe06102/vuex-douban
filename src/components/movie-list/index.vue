<template>
    <div>
        <movie-item v-for="movie in movies" :movie="movie" :key="movie.id"/>
    </div>
</template>
<script>
import MovieItem from './movie-item'

export default {
    name: 'movie-list',
    props: {
        movies: Array,
    },
    components: {
        'movie-item': MovieItem,
    }
}
</script>
