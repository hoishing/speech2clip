import langOpt from './langs'
import Bowser from 'bowser'

export let errMsg = ''
export let txt = ''

const browser = Bowser.getParser(window.navigator.userAgent)
const isChrome = browser.satisfies({
  chrome: '>=25',
})

if (!('webkitSpeechRecognition' in window && isChrome)) {
  errMsg = 'only support Chrome desktop version 25+'
  return //early return??
} else {
  let recog = new webkitSpeechRecognition()
  recog.continuous = true
  recog.interimResults = true
  // recog.lang = 'yue-Hant-HK'
}

export function recognize(lang) {
  console.log(`recognizing ${lang}`)
  if (recognizing) {
    recog.stop()
  } else {
    txt = ''
    recog.start()
  }
}

// textBox = document.getElementById('textBox')
// toggleBut = document.getElementById('toggleBut')
// toggleBut.onclick = recognize
// recognizing = false

function recognize() {}

// recog.onstart = () => {
//   textBox.innerHTML = ''
//   recognizing = true
//   toggleBut.value = 'stop'
//   textBox.style.color = '#9a9a9a'
//   textBox.innerText = 'recognizing...'
// }

// recog.onend = () => {
//   recognizing = false
//   toggleBut.value = 'start'
// }

// recog.onresult = e => {
//   i = e.resultIndex
//   r = e.results[i]
//   j = r.length - 1
//   txt = r[j].transcript
//   textBox.style.color = '#9a9a9a'
//   textBox.innerHTML = txt
//   if (r.isFinal) {
//     navigator.clipboard.writeText(txt)
//     textBox.style.color = 'white'
//   }
// }

// document.getElementsByTagName('body')[0].oncopy = () => navigator.clipboard.writeText(textBox.innerText)

// document.onkeyup = e => {
//   if (e.code == 32) {
//     recognize()
//   }
// }

// window.onload = () => recognize()
