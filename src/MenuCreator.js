import { TextParser } from "./TextParser";

export class MenuCreator {
  init () {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create(this.mainOptions);
  }

  afterSearch (query) {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create(this.afterSearchOptions);
    chrome.contextMenus.create({id: "rottenTomatesSep1", type: "separator", contexts: ["all"]});
    chrome.contextMenus.create({id: "rottenTomatesQuery", title: query, contexts: ["all"]});
    chrome.contextMenus.create({id: "rottenTomatesSep2", type: "separator", contexts: ["all"]});
  }

  forMovie (movie) {
    chrome.contextMenus.create({
      id: `rottenTomatoes${movie.title}`,
      title: movie.contextMenuTitle,
      contexts: ["all"],
      onclick: function() {
        chrome.tabs.create({
          url: movie.url,
          active: false
        });
      }
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