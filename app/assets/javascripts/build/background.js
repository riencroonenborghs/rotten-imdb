var option;

option = {
  id: "imdbLookup",
  contexts: ["selection"],
  title: "IMDB Lookup",
  onclick: function(info) {
    var elt, index, newQuery, query;
    query = info.selectionText;
    query = query.replace(/\./g, " ").split(/[ \/]/);
    if (query[query.length - 1] === "") {
      query.pop();
    }
    newQuery = (function() {
      var i, len, results;
      results = [];
      for (index = i = 0, len = query.length; i < len; index = ++i) {
        elt = query[index];
        if (index > 0 && elt.match(/([0-9]{4})|(S([0-9]*)E([0-9]*))|([0-9]*)p/)) {
          break;
        }
        results.push(elt);
      }
      return results;
    })();
    return chrome.tabs.create({
      url: "http://www.imdb.com/find?q=" + (encodeURI(newQuery.join(" "))),
      active: false
    });
  }
};

chrome.contextMenus.remove(option.id);

chrome.contextMenus.create(option);
