import { Searcher } from "searchers/Searcher";
import { MoviesParser } from "parsers/search_results/imdb/MoviesParser";

export class IMDBMovieSearcher extends Searcher {
  get baseUrl() { return "https://www.imdb.com/search/title/?title_type=feature&title="; }

  parse (data) {
    const moviesParser = new MoviesParser(data);
    moviesParser.parse();

    return moviesParser;
  }
}
