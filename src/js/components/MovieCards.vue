<template>
    <div class="lists">
        <div
            class="lists-item"
            v-for="(movie, key) in movies"
            :key="key"
        >
        123
            <figure>
                <img
                    :src="movie.img"
                    :alt="movie.title"
                >
            </figure>
            <div class="lists-item-body">
                <h3>{{ movie.title }}</h3>
                <h5>{{ movie.type }} . {{ movie.StreamingPlatform }}</h5>
                <p>Episodes: {{ movie.episodes }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movies: {}
    }
}
</script>

<style lang="scss" scoped>
    .lists {
        &-item-body {
            background-color: #aeaeae;
        }
    }
</style>