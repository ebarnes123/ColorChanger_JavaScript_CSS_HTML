// app.js

const button = document.querySelector("button")
const body = document.querySelector("body")
// colors that the background can change to
const color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'black', 'white']

// default color of background will be violet
body.style.backgroundColor = 'violet'

// listens for a click from the user, then calls the changeBackground color function below
button.addEventListener('click', changeBackground)

function changeBackground() {
  // calls the color change randomly
  const colorIndex = parseInt(Math.random()*color.length)
  body.style.backgroundColor = color[colorIndex]
}
