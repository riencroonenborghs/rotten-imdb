import { SearchResultParser } from "./SearchResultParser";
import { Movie } from "../models/Movie";

export class SearchResultMoviesParser extends SearchResultParser {
  constructor (body) {
    super(body);
    this._movies = [];
  }

  get movies() { return this._movies; }

  parse () {    
    this._allNodes.forEach((node) => {
      this._movies.push(
        this._parseTopNode(node)
      );
    });
  }

  get _allNodes () {
    return this.element.querySelectorAll("search-page-result[slot='movie'] ul[slot='list'] search-page-media-row[skeleton='panel']");
  }

  _parseTopNode (node) {
    const title = this._title(node);
    const year = this._attribute(node, "releaseyear");
    // startyear
    const score = this._attribute(node, "tomatometerscore");
    const state = this._attribute(node, "tomatometerstate");
    const url = this._url(node);
    
    return Object.assign(
      new Movie(), {
        title: title,
        year: year,
        score: score,
        state: state,
        url: url
      }
    )
  }
}