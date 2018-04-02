# 2-tv-shows

## 1/ Search

> Implement a search feature that filters TV shows images by title

- Each `<img>` tag in `index.html` is a TV show poster. It contains a `data-keywords` attribute to store the TV show title
- The page header contains an `<input>` tag that should be used to filter the images list by typing a TV show title
- An `<img>` tag can be *filtered out* from the list by adding the class `is-hidden`
- Code should be written in `main.js` using standard DOM API only, no jQuery!

## 2/ Modal

> Implement a modal box that displays a TV show poster

- The modal should be composed of:
  - An overlay `<div>` (use class `modal-overlay`)
  - A content `<div>` (use class `modal-content`)
  - An `<img>` tag (use class `modal-img`) to display the TV show poster (within content `<div>`)
  - A close `<button>` (use class `close-button`) with inner HTML as: `<i class="fa fa-times fa-3x"></i>` for icon
- The modal should be opened on `<img>` click
- The modal should be closed on close button click
- All related modal code should be handled by a `Modal` class that will be exported as a named ES6 module.
- Code should be written in `main.js` and `Modal.js` using DOM API only, no jQuery!
