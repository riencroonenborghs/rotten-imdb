import { Searcher } from "searchers/Searcher";

export class IMDBTvShowSearcher extends Searcher {
  get baseUrl() { return "https://www.imdb.com/search/title/?title_type=tv_series&title="; }
}
