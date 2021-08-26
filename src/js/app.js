import Vue from 'vue';
import MovieCards from './components/MovieCards'

new Vue({
    el: '#app',
    // data, function, components
    components: {
        'movie-cards': MovieCards
    },
    data: () => ({
        movies: [
            {
                title: 'Law School',
                type: 'series',
                StreamingPlatform: 'Netflix',
                episodes: 16,
                img: 'https://asianwiki.com/images/8/86/Law_School-mp1.jpeg'
            },
            {
                title: 'The Good Doctor',
                type: 'series',
                StreamingPlatform: 'Netflix',
                episodes: 65,
                img: 'https://images-na.ssl-images-amazon.com/images/I/91xw4nhJ6NL._RI_.jpg'
            },
            {
                title: 'The Upside',
                type: 'movie',
                StreamingPlatform: 'Netflix',
                episodes: 1,
                img: 'https://m.media-amazon.com/images/M/MV5BNzY3NzYyNjI0N15BMl5BanBnXkFtZTgwNjYzMDc0NjM@._V1_.jpg'
            },
        ]
    }),
});