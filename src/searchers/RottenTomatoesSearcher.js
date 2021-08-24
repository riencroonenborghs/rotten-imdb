import { Searcher } from "searchers/Searcher";
import { SearchResultMoviesParser } from "parsers/search_results/rotten_tomatoes/MoviesParser";
import { SearchResultTvShowsParser } from "parsers/search_results/rotten_tomatoes/TvShowsParser";

export class RottenTomatoesSearcher extends Searcher {
  get baseUrl() { return "https://www.rottentomatoes.com/search?search="; }

  parse (data) {
    const moviesParser = new SearchResultMoviesParser(data);;
    const tvShowsParser = new SearchResultTvShowsParser(data);
    moviesParser.parse();
    tvShowsParser.parse();

    return {movies: moviesParser, tvShows: tvShowsParser};
  }
}
