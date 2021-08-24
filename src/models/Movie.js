export class Movie {
  set title (title) { this._title = title; }
  get title () { return this._title; }

  set year (year) { this._year = year; }
  get year () { return this._year; }

  set score (score) { this._score = score; }
  get score () { return this._score; }

  set state (state) { this._state = state; }
  get state () { return this._state; }

  set url (url) { this._url = url; }
  get url () { return this._url; }

  get contextMenuTitle () {
    const score = this.score ? this.score : "??";
    const icon = "";
    if (this.state) {
      icon = this.state.match(/fresh/) ? ":)" : ":(";
    }
    return `${score} ${icon} ${this.title} (${this.year})`;
  }
}