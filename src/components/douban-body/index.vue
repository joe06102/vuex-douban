<template>
    <main class="body">
        <movie-list :movies="movies"/>
    </main>
</template>
<script>
import MovieList from '../movie-list'
import { createNamespacedHelpers, mapGetters } from 'vuex'

export default {
    name: 'douban-body',
    computed: {
        ...mapGetters('movies', {
            'movies': 'moviesInTheater',
        })
    },
    components: {
        'movie-list': MovieList,
    },
    created: function() {
        this.$store.dispatch({
            type: 'movies/fetchMoviesInTheater',
        })
    }
}
</script>
<style scoped>
.body {
    max-width: 80%;
    margin: auto;
    box-shadow: 0 0 4px 1px #ccc;
    background-color: #fff;
    overflow: hidden;
    padding: 16px 32px;
}
</style>