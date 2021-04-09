let app = new Vue (
  {
    el: '#app',
    data: {
      nameMovie: '',
      movies: [],

    },
    methods: {

      searchMovie: function(){

        axios.get('https://api.themoviedb.org/3/search/movie?',{

          params: {
            api_key: 'af468508a333025a615170246e061ead',
            query: this.nameMovie,
            language: 'it-IT',
          }

        })
        .then((response) => {
        this.movies = response.data.results;
        })
        this.nameMovie = '';
      }
    }
  }
);
