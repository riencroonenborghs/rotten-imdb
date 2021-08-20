import { TextParser } from "./TextParser";
import { RottenTomatoesSearcher } from "./RottenTomatoesSearcher";

const option = {
  id: "rottenTomatoesLookup",
  contexts: ["selection"],
  title: "RottenTomatoes Lookup",
  onclick: function(info) {
    const selectionText = info.selectionText;
    const parser = new TextParser(selectionText);
    const searcher = new RottenTomatoesSearcher(parser.query);
    searcher.parse().then((movies) => {
      console.log(movies);
    })
    

    // chrome.tabs.create({
    //   url: searcher.url,
    //   active: false
    // });
  }
};

chrome.contextMenus.remove(option.id);
chrome.contextMenus.create(option);
