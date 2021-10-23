export class Searcher {
  constructor (query) {
    this.query = query;
 }

  get baseUrl() { throw("#baseUrl implement me!"); }

  get url () {
    return `${this.baseUrl}${this.encodedQuery}`;
  }

  get encodedQuery () {
    return encodeURI(this.query);
  }
}
