let b1 = 0
let b2 = 0
let height = 0
let area = 0

document.getElementById('button').addEventListener('click', math)

function math () {
  b1 = document.getElementById('input-1').value
  b1 = parseInt(b1)
  b2 = document.getElementById('input-2').value
  b2 = parseInt(b2)
  height = document.getElementById('input-3').value
  height = parseInt(height)
  area = (b1 + b2) * height / 2
  alert(area)
}
