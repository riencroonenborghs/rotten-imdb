export class TextParser {
  constructor (text) {
    this.text = text;
    // this.regExp = /.*(([0-9]{4})(?!p)|(S([0-9]*)E([0-9]*))|(s([0-9]*)e([0-9]*)))/;
    this.regExp = /([0-9]{4})(?!p)|(S([0-9]*)E([0-9]*))|(s([0-9]*)e([0-9]*))/;
  }

  get query () {
    let data = [];
    let touched = false;
    this.text.split(/[\.\- ]/).forEach((part, index) => {
      if (part.match(this.regExp) !== null) { touched = true; }

      if (!touched) { data.push(part); }
      else if (part.match(this.regExp) !== null) {
        data.push(part);
      }
    });
    return data.join(" ");

    // if (this.text.split(/[\.\- ]/).length === 1) {
    //   return this.text;
    // }

    // let text = this.text.replaceAll(/\./g, " ");
    // let matches = text.match(this.regExp)
    // if (matches === null) { return ""; }
    // else { return matches[0]; }
  }
}
