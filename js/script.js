let app = new Vue (
  {
    el: '#app',
    data: {
      nameMovie: '',
      movies: [],

    },
    methods: {
      // tramite la funzione richiamo la API con axios e passo i parametri
      // di cui ho bisogno. Poi associo l'array movies con i risultati
      // della api per poi stamparli nell' HTML
      searchMovie: function(){

        axios.get('https://api.themoviedb.org/3/search/movie?',{

          params: {
            api_key: 'af468508a333025a615170246e061ead',
            query: this.nameMovie,
            language: 'it-IT',
          }

        })
        .then((response) => {
          // nell'array vengono salvati tutti i risultati della api
        this.movies = response.data.results;
        })
        this.nameMovie = '';
      }
    }
  }
);
