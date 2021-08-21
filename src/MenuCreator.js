import { TextParser } from "./parsers/TextParser";

export class MenuCreator {
  constructor () {
    this.separatorCount = 0;
  }

  onInit () {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create({
      id: `rottenTomatoes`,
      contexts: ["selection"],
      title: "Rotten Tomatoes",
      onclick: function(info) {
        const selectionText = info.selectionText;
        const parser = new TextParser(selectionText);

        chrome.storage.local.remove("rottenTomatoes");    
        chrome.storage.local.set({rottenTomatoes: {query: parser.query}});
      }
    });
  }

  addSeparator () {
    chrome.contextMenus.create({
      id: `rottenTomatesSep${this.separatorCount}`,
      type: "separator",
      contexts: ["all"]
    });
    this.separatorCount += 1;
  }

  afterSearch (query) {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create({
      id: `rottenTomatoes`,
      contexts: ["selection"],
      title: "New Rotten Tomatoes Search",
      onclick: function(info) {
        const selectionText = info.selectionText;
        const parser = new TextParser(selectionText);

        chrome.storage.local.remove("rottenTomatoes");    
        chrome.storage.local.set({rottenTomatoes: {query: parser.query}});
      }
    });
    this.addSeparator();
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

  forTvShow (tvShow) {
    chrome.contextMenus.create({
      id: `rottenTomatoes${tvShow.title}`,
      title: tvShow.contextMenuTitle,
      contexts: ["all"],
      onclick: function() {
        chrome.tabs.create({
          url: tvShow.url,
          active: false
        });
      }
    });
  }
}