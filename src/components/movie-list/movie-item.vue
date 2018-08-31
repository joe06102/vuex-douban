<template>
    <div class="card">
        <img class="poster" :src="movie.poster" :alt="movie.title"/>
        <div class="info-wrap">
            <h3>{{ movie.title }}<strong class="rating">{{ movie.rating }}</strong></h3>
            <p>Director: {{ directors }}</p>
            <p>Casts: {{ casts }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'movie-item',
    props: {
        movie: {
            id: String,
            title: String,
            rating: Number,
            casts: Array,
            directors: Array,
            poster: String,
        }
    },
    computed: {
        casts: function() {
            return this.movie.casts.join(' / ')
        },
        directors: function() {
            return this.movie.directors.join(' / ')
        }
    }
}
</script>

<style scoped>
.card {
    height: 160px;
    border: 0 none;
    border-radius: 4px;
    box-shadow: 0 0 4px 1px #ccc;
    margin: 32px 0;
    text-align: left;
    padding: 16px 32px;
    background-color: #fff;
    color: #333;
}
.poster {
    max-height: 120px;
    vertical-align: top;
    position: relative;
    top: 50%;
    margin-top: -60px;
}
.info-wrap {
    margin-left: 32px;
    display: inline-block;
}
.rating {
    color: sandybrown;
    padding: 0 16px;
}
</style>

