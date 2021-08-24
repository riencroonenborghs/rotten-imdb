import { Searcher } from "searchers/Searcher";
import { MoviesParser } from "parsers/search_results/rotten_tomatoes/MoviesParser";
import { TvShowsParser } from "parsers/search_results/rotten_tomatoes/TvShowsParser";

export class RottenTomatoesSearcher extends Searcher {
  get baseUrl() { return "https://www.rottentomatoes.com/search?search="; }

  parse (data) {
    const moviesParser = new MoviesParser(data);;
    const tvShowsParser = new TvShowsParser(data);
    moviesParser.parse();
    tvShowsParser.parse();

    return {movies: moviesParser, tvShows: tvShowsParser};
  }
}
