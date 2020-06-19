

let button = document.querySelector('.button')
let main = document.querySelector('.main')
let textInput = document.querySelector('.textInput')
let inputText = document.querySelector('.inputText')
let textAdditions = document.querySelector('.textAdditions')

button.addEventListener('click', function(){



main.remove('.main')

})

inputText.addEventListener('click', function(){
let textElement = document.createElement('div')
textAdditions.append(textElement)
textElement.append(document.querySelector('.textInput').value)

})