// DOM Refences
var name = document.querySelector(".nameEntered");
var English = document.querySelector(".LanguageBtn")
var Spanish = document.querySelector(".LanguageBtn")
var French = document.querySelector(".LanguageBtn")
var displayResult = document.querySelector(".display")
var button = document.querySelector(".greetBtn")

var greeting = FactoryGreeting();

function textName() {
  greeting.checkGreet(name.value)

}

function helloFunc(){
  var checkedRadioBtn = document.querySelector("input[name = 'language']:checked")
  if (checkedRadioBtn)
    var input = checkedRadioBtn.value
  greeting.checkGreet(input)
  displayResult.innerHTML = greeting.checkGreet(name);

}



// Event listeners
button.addEventListener("click", helloFunc);
