import { MenuCreator } from "./MenuCreator";
import { Searcher } from "./Searcher";

const menuCreator = new MenuCreator();

menuCreator.init();

chrome.storage.onChanged.addListener((list, sync) => {
  const query = list?.rottenTomatoes?.newValue?.query;
  if(query === null) { return; }

  const searcher = new Searcher(query);
  searcher.parse().then((movies) => {
    menuCreator.afterSearch();    

    movies.forEach((movie) =>
      menuCreator.forMovie(movie)
    );
  });
});
