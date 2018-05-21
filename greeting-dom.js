  // DOM Refences
  var nameVal = document.querySelector(".nameEntered");
  var displayResult = document.querySelector(".display");
  var button = document.querySelector(".greetBtn");
  var resetButton = document.querySelector(".resetBtn")
  var nameCount = document.querySelector(".countGreetings")
  //factory function
  var greeting = FactoryGreeting();

  function helloFunc() {


    var name = nameVal.value;
    var checkedRadioBtn = document.querySelector("input[name = 'language']:checked")
    if (checkedRadioBtn) {
      var language = checkedRadioBtn.value;
      displayResult.innerHTML = greeting.checkGreet(language, name);
    }


    nameCount.innerHTML= greeting.count();
  }

  // Event listeners
  button.addEventListener("click", helloFunc);
