import { title } from "process";
import { Movie } from "./Movie";

export class MoviesParser {
  constructor(body) {
    this.element = document.createElement('div');
    this.element.insertAdjacentHTML('beforeend', body);
  }

  parse () {
    // console.log(this._movies);
    this._movies.forEach((movie) => {
      const o = this._parseMovie(movie); 
      console.log(o);
    })
  }

  get _movies () {
    return this.element.querySelectorAll("search-page-result[slot='movie'] ul[slot='list'] search-page-media-row[skeleton='panel']");
  }

  _parseMovie (data) {    
    // const title = data.querySelector("a[stot='title']").innerText;
    // const attributes = data.attributes;
    const year = attributes.getNamedItem("releaseyear").value;
    const score = attributes.getNamedItem("tomatometerscore").value;
    const state = attributes.getNamedItem("tomatometerstate").value;
    // releaseyear tomatometerscore tomatometerstate
    return Object.assign(
      new Movie(), {
        // title: title,
        year: year,
        score: score,
        state: state
      }
    )
  }
}