import './langs'

// if (!('webkitSpeechRecognition' in window)) {
//   textBox.innerText = 'API not supported, use Chrome 25+'
//   throw new Error()
// }

// textBox = document.getElementById('textBox')
// toggleBut = document.getElementById('toggleBut')
// toggleBut.onclick = recognize
// recognizing = false

// recog = new webkitSpeechRecognition()
// recog.continuous = true
// recog.interimResults = true
// recog.lang = 'yue-Hant-HK'

// function recognize() {
//   if (recognizing) {
//     recog.stop()
//   } else {
//     textBox.innerHTML = ''
//     recog.start()
//   }
// }

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
