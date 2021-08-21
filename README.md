# Rotten Tomatoes

## What is it?

`Rotten Tomatoes` is a Chrome extension that allows you to quickly look up highlighted text on [Rotten Tomatoes](https://www.rottentomatoes.com/).

## How to use

Highlight some text in your browser.


Right-click and select `Rotten Tomatoes`.
Right-click again and `Rotten Tomatoes` should now be a drop-down list of search results, split into movies and tv shows results.

## How to build

This repo comes pre-built.
But you can do:
`yarn install`
`yarn build`

## How to install

- go to `chrome://extensions`
- check `Developer mode` (top right)
- click `Load unpacked extension...` (top left)
- point it `./dist` (the folder that contains `manifest.json`)
- click `Select`