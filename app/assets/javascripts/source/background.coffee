option =
  id: "imdbLookup"
  contexts: ["selection"]
  title: "IMDB Lookup"
  onclick: (info) ->
    query = info.selectionText
    # replace dots with space + split on space and /
    query = query.replace(/\./g, " ").split(/[ \/]/)
    # discard last element in array when it's empty string (eg when query had trailing /)
    query.pop() if query[query.length - 1] == ""
    newQuery = for elt, index in query
      # break if past first element
      # and element resembles a year, SxxExx or quality (eg 1080p) format
      break if index > 0 && elt.match(/([0-9]{4})|(S([0-9]*)E([0-9]*))|([0-9]*)p/)
      elt
    chrome.tabs.create
      url: "http://www.imdb.com/find?q=#{encodeURI newQuery.join(" ")}"
      active: false

chrome.contextMenus.remove option.id
chrome.contextMenus.create option