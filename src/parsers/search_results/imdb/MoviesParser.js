import { Parser } from "parsers/search_results/Parser";
import { Movie } from "models/Movie";

export class MoviesParser extends Parser {
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
    return this.element.querySelectorAll("#main .article .lister.list.detail.sub-list .lister-list .lister-item .lister-item-content");
  }

  _parseTopNode (node) {
    const header = node.querySelector(".lister-item-header");
    
    const link = header.querySelector("a");
    const title = link?.innerText || "asd";
    const url = `https://www.imdb.com/${this._attribute(link, "href")}`;

    const year = header.querySelector(".lister-item-year")?.innerText;

    const score = node.querySelector(".ratings-bar .ratings-imdb-rating strong")?.innerText;
    const state = null;

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