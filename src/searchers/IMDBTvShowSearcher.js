import { Searcher } from "searchers/Searcher";
import { TvShowsParser } from "parsers/search_results/imdb/TvShowsParser";

export class IMDBTvShowSearcher extends Searcher {
  get baseUrl() { return "https://www.imdb.com/search/title/?title_type=tv_series&title="; }

  parse (data) {
    const tvShowsParser = new TvShowsParser(data);
    tvShowsParser.parse();

    return tvShowsParser;
  }
}
