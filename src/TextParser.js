export class TextParser {
  constructor (text) {
    this.text = text;
    this.regExp = /([0-9]{4})|(S([0-9]*)E([0-9]*))|([0-9]*)p/;
  }

  get query () {
    let query = []
    this._parts.forEach((part) => {
      if (part.match(this.regExp) === null) {
        query.push(part);
      }
    });
    return query.join(" ");
  }

  get _parts () {
    const parts = this.text.replace(/\./g, " ").split(/[ \/]/);
    if (parts[parts.length - 1] === "") { parts.pop(); }
    return parts;
  }
}
