export class Searcher {
  constructor (query) {
    this.query = query;
 }

  search () {
    return fetch(this.url)
      .then(response => response.text())
      .then((data) => {
        return this.parse(data);
      })
  }

  get baseUrl() { throw("#baseUrl implement me!"); }

  get url () {
    return `${this.baseUrl}${this.encodedQuery}`;
  }

  get encodedQuery () {
    return encodeURI(this.query);
  }
}
