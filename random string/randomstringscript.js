var array = ['string1', 'string2', 'string3'];
var elString = document.getElementById('two')
var generator = document.getElementById('one')
var stringText = ''

//function return a random string
//assigns it to stringText
//pushes stringText to D
function randomString () {
stringText = array[Math.floor(Math.random()*array.length)]
elString.textContent = stringText
  };


//attach a listener to the button
generator.addEventListener('click', randomString, false)


