# Rotten Tomatoes

## What is it?

`Rotten Tomatoes` is a Chrome extension that allows you to quickly look up highlighted text on [Rotten Tomatoes](https://www.rottentomatoes.com/).

## How to use

Highlight some text in your browser.

1. Right-click and select `Rotten Tomatoes`.

![highlight](https://github.com/riencroonenborghs/rotten-tomatoes/blob/master/screenshots/step1.png?raw=true)

2. Right-click again and `Rotten Tomatoes` should now be a drop-down list of search results, split into movies and tv shows results.

![highlight](https://github.com/riencroonenborghs/rotten-tomatoes/blob/master/screenshots/step2.png?raw=true)

Next time select `Rotten Tomatoes` > `New Rotten Tomatoes Search`.

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