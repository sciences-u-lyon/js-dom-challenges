# 1-drum-kit

> Handle JavaScript key events and play a drum sound per letter

- **Author**: Wes Bos ([@wesbos](https://twitter.com/wesbos))
- **Source**: https://javascript30.com/

## Instructions

- In `index.html`:
  - Each `<div class="key">` tag represents a letter with a sound name. The attribute `data-key` is the key code of the letter.
  - Each `<audio>` tag represents a sound file (.wav) that can be played. They are also identified with a `data-key` so that each letter match a sound file.
- All code should be written in `main.js`.
- No code should be added to `index.html`.
- Only standard DOM API should be used, no jQuery!

## Step 1

> Play the drum

- Add an event listener to `window` in order to catch the event that happens when a key from keyboard is pressed.
- Find which letter was pressed in the caught event (`keyCode`).
- From this key code, select the corresponding `<audio>` tag and play it!

## Step 2

> Add the visual

- Add the CSS class `playing` to the `<div class="key">` tag when it's pressed.
- Remove the CSS class `playing` right after it's added, when the transition is finished. Use the `transitionend` event and remove the class when the event `propertyName` property has the value `transform`.
