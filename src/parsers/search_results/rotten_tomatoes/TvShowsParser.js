import { Parser } from "parsers/search_results/Parser";
import { TvShow } from "models/TvShow";

export class TvShowsParser extends Parser {
  constructor (body) {
    super(body);
    this._tvShows = [];
  }

  get tvShows() { return this._tvShows; }
  
  parse () {    
    this._allNodes.forEach((node) => {
      this._tvShows.push(
        this._parseTopNode(node)
      );
    });
  }

  get _allNodes () {
    return this.element.querySelectorAll("search-page-result[slot='tv'] ul[slot='list'] search-page-media-row[skeleton='panel']");
  }

  _parseTopNode (node) {
    const title = this._title(node);
    const year = this._attribute(node, "startyear");
    const score = this._attribute(node, "tomatometerscore");
    const state = this._attribute(node, "tomatometerstate");
    const url = this._url(node);
    
    return Object.assign(
      new TvShow(), {
        title: title,
        year: year,
        score: score,
        state: state,
        url: url
      }
    )
  }
}