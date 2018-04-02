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

## 3/ End 2 End Testing

> Hands on End 2 End tests with Cypress!

- Add cypress dependency:
  - `yarn add --dev cypress` / `npm install --save-dev cypress`
- Update `package.json` with:
```json
"scripts": {
  "serve": "live-server src/",
  "cypress": "cypress open"
}
```
- Launch development server:
  - `yarn serve`
- Launch cypress:
  - `yarn cypress` / `npm run cypress`
- Update `cypress.json` with:
```json
{
  "baseUrl": "http://127.0.0.1:8080/2-tv-shows/",
  "ignoreTestFiles": "example_spec.js"
}
```
- Add `tv-shows.spec.js` file in `cypress/integration/` folder
- Add some tests to check the search feature
- Add another test to check the modal "open" feature
- Add another test to check the modal "close" feature
