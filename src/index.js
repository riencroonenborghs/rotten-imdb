import { MenuCreator } from "./MenuCreator";
import { Searcher } from "./Searcher";

const menuCreator = new MenuCreator();

menuCreator.init();

chrome.storage.onChanged.addListener((list, sync) => {
  const query = list?.rottenTomatoes?.newValue?.query;
  if(!query) { return; }

  const searcher = new Searcher(query);
  searcher.parse().then((parsers) => {
    menuCreator.afterSearch(query);
    
    parsers.movies.movies.forEach((movie) =>
      menuCreator.forMovie(movie)
    );
    menuCreator.separator(2);
    parsers.tvShows.tvShows.forEach((tvShow) =>
      menuCreator.forTvShow(tvShow)
    );
  });
});
