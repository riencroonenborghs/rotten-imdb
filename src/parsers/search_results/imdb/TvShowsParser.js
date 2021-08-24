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
    return this.element.querySelectorAll("#main .article .lister.list.detail.sub-list .lister-list .lister-item .lister-item-content");
  }

  _parseTopNode (node) {
    const header = node.querySelector(".lister-item-header");
    
    const link = header.querySelector("a");
    const title = link?.innerText || "asd";
    const url = this._attribute(link, "href");

    const year = header.querySelector(".lister-item-year")?.innerText;

    const score = node.querySelector(".ratings-bar .ratings-imdb-rating strong")?.innerText;
    const state = null;

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