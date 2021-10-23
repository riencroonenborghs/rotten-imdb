import { Searcher } from "searchers/Searcher";

export class RottenTomatoesSearcher extends Searcher {
  get baseUrl() { return "https://www.rottentomatoes.com/search?search="; }
}
