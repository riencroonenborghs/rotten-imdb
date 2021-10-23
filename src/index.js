import { TextParser } from "./parsers/TextParser";
import { RottenTomatoesSearcher } from "searchers/RottenTomatoesSearcher";
import { IMDBMovieSearcher } from "searchers/IMDBMovieSearcher";
import { IMDBTvShowSearcher } from "searchers/IMDBTvShowSearcher";

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  id: `rottenIMDB-rottentomatoes`,
  contexts: ["selection"],
  title: "lookup on Rotten Tomatoes",
  onclick: function(info) {
    const selectionText = info.selectionText;
    const parser = new TextParser(selectionText);
    const searcher = new RottenTomatoesSearcher(parser.query);

    chrome.tabs.create({
      url: searcher.url,
      active: false
    });
  }
});
chrome.contextMenus.create({
  id: `rottenIMDB-imdb`,
  contexts: ["selection"],
  title: "look up on IMDB",
  onclick: function(info) {
    const selectionText = info.selectionText;
    const parser = new TextParser(selectionText);
    const movieSearcher = new IMDBMovieSearcher(parser.query);
    const tvShowSearcher = new IMDBTvShowSearcher(parser.query);

    chrome.tabs.create({
      url: movieSearcher.url,
      active: false
    });

    chrome.tabs.create({
      url: tvShowSearcher.url,
      active: false
    });
  }
});
