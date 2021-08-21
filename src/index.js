import { MenuCreator } from "./MenuCreator";
import { Searcher } from "./Searcher";

const MAX_MOVIES = 5;
const MAX_TVSHOWS = 5;
const menuCreator = new MenuCreator();

menuCreator.onInit();

chrome.storage.onChanged.addListener((list, sync) => {
  const query = list?.rottenTomatoes?.newValue?.query;
  if(!query) { return; }

  const searcher = new Searcher(query);
  searcher.parse().then((parsers) => {
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
});
