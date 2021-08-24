import { MenuCreator } from "./MenuCreator";
import { RottenTomatoesSearcher } from "searchers/RottenTomatoesSearcher";
import { IMDBMovieSearcher } from "searchers/IMDBMovieSearcher";
import { IMDBTvShowSearcher } from "searchers/IMDBTvShowSearcher";

const MAX_MOVIES = 5;
const MAX_TVSHOWS = 5;
const menuCreator = new MenuCreator();

menuCreator.onInit();

const rottenTomatoesSearch = () => {
  const searcher = new RottenTomatoesSearcher(query);
  searcher.search().then((parsers) => {
    menuCreator.afterSearch(query);
    
    parsers.movies.movies.forEach((movie, index) => {
      if (index < MAX_MOVIES) {
        menuCreator.forMovie(movie);
      }
    });
    menuCreator.addSeparator();
    parsers.tvShows.tvShows.forEach((tvShow, index) => {
      if (index < MAX_TVSHOWS) {
        menuCreator.forTvShow(tvShow)
      }
    });
  });
}

const imdbSearch = (query) => {
  const movieSearcher = new IMDBMovieSearcher(query);
  const tvShowSearcher = new IMDBTvShowSearcher(query);
  movieSearcher.search().then((parsers) => {
    menuCreator.afterSearch(query);
    
    parsers.movies.forEach((movie, index) => {
      if (index < MAX_MOVIES) {
        menuCreator.forMovie(movie);
      }
    });

    menuCreator.addSeparator();
  
    tvShowSearcher.search().then((parsers) => {
      parsers.tvShows.forEach((tvShow, index) => {
        if (index < MAX_TVSHOWS) {
          menuCreator.forTvShow(tvShow);
        }
      });
    });
  });
  
}

chrome.storage.onChanged.addListener((list, sync) => {
  const query = list?.rottenTomatoes?.newValue?.query;
  if(!query) { return; }

  // rottenTomatoesSearch(query);
  imdbSearch(query);
});
