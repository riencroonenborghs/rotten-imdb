import { MoviesParser } from "./MoviesParser";

export class RottenTomatoesSearcher {
  constructor (query) {
    this.query = query;
    this.baseUrl = "https://www.rottentomatoes.com/search?search=";
  }

  parse () {
    fetch(this.url)
      .then(response => response.text())
      .then((data) => {
        const parser = new MoviesParser(data);
        parser.parse();
      })
  }

  get url () {
    return `${this.baseUrl}${this._encodedQuery}`;
  }

  get _encodedQuery () {
    return encodeURI(this.query);
  }
}
