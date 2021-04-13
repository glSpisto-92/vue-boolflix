let app = new Vue (
  {
    el: '#app',
    data: {
      key: 'af468508a333025a615170246e061ead',
      urlContent: 'https://api.themoviedb.org/3/search/',
      nameMovie: '',
      movies: [],
    },
    methods: {
      // tramite la funzione richiamo la API con axios e passo i parametri
      // di cui ho bisogno. Poi associo l'array movies con i risultati
      // della api per poi stamparli nell' HTML
      searchMovie: function(){

        axios.get(this.urlContent + 'movie',{

          params: {
            api_key: this.key,
            query: this.nameMovie,
            language: 'it-IT',
          }
        })
        .then((movieResults) => {
          // nell'array vengono salvati tutti i risultati della api

        movieResults.data.results.forEach((item, i) => {
          item.vote_average = Math.ceil(item.vote_average.toFixed() / 2);
        });
        this.movies = movieResults.data.results;



          axios.get(this.urlContent + 'tv',{

            params: {
              api_key: this.key,
              query: this.nameMovie,
              language: 'it-IT',
            }
          })
          .then((tvResults) => {
            // ciclo i risultati delle serietv e li pusho nell'array movie cosi
            // da avere film e serie tv
            // this.movies.push(..tvResults.data.results);

            tvResults.data.results.forEach((item) => {
              item.vote_average = Math.ceil(item.vote_average.toFixed() / 2);
              this.movies.push(item);
            });
            // svuoto il campo input solo dopo aver terminato le 2 chiamate
            this.nameMovie = '';
          });
        });
      }
    }
  }
);
