document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function black() {
  document.body.style.backgroundColor = 'black'
}
function green() {
  document.body.style.backgroundColor = 'lightgreen'
}
function red() {
  document.body.style.backgroundColor = 'red'
}

function showhtml() {
  document.getElementById('fig').src = '/img/html5.png'
  document.getElementById('disc').innerHTML = 'HTML5 문서싸개'
}

function showcss() {
  document.getElementById('fig').src = '/img/csslogo.png'
  document.getElementById('disc').innerHTML = 'css 그림쟁이'
}

function showjs() {
  document.getElementById('fig').src = '/img/jslogo.png'
  document.getElementById('disc').innerHTML = '레전드급 최고 공돌이'
}
function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('disc').innerHTML = ''
}
