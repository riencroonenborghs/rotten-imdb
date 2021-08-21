import { TextParser } from "./TextParser";

export class MenuCreator {
  init () {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create(this.mainOptions);
  }

  afterSearch () {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create(this.afterSearchOptions);
    chrome.contextMenus.create({id: "rottenTomatesSep", type: "separator", contexts: ["all"]});
  }

  forMovie (movie) {
    chrome.contextMenus.create({
      id: `rottenTomatoes${movie.title}`,
      title: movie.contextMenuTitle,
      contexts: ["all"]
    });
  }

  get mainOptions () {
    return {
      id: `rottenTomatoes`,
      contexts: ["selection"],
      title: "Rotten Tomatoes",
      onclick: function(info) {
        const selectionText = info.selectionText;
        const parser = new TextParser(selectionText);

        chrome.storage.local.remove("rottenTomatoes");    
        chrome.storage.local.set({rottenTomatoes: {query: parser.query}});
      }
    }
  }

  get afterSearchOptions () {
    const options = this.mainOptions;
    options.title = "New Rotten Tomatoes Search"
    return options;
  }
  
}