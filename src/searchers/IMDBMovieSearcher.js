import { Searcher } from "searchers/Searcher";

export class IMDBMovieSearcher extends Searcher {
  get baseUrl() { return "https://www.imdb.com/search/title/?title_type=feature&title="; }
}
