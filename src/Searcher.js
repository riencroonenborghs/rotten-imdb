import { SearchResultMoviesParser } from "./SearchResultMoviesParser";
import { SearchResultTvShowsParser } from "./SearchResultTvShowsParser";

export class Searcher {
  constructor (query) {
    this.query = query;
    this.baseUrl = "https://www.rottentomatoes.com/search?search=";
  }

  parse () {
    return fetch(this.url)
      .then(response => response.text())
      .then((data) => {
        const moviesParser = new SearchResultMoviesParser(data);
        const tvShowsParser = new SearchResultTvShowsParser(data);
        moviesParser.parse();
        tvShowsParser.parse();

        return {movies: moviesParser, tvShows: tvShowsParser};
      })
  }

  get url () {
    return `${this.baseUrl}${this._encodedQuery}`;
  }

  get _encodedQuery () {
    return encodeURI(this.query);
  }
}
