  // DOM Refences
  var nameVal = document.querySelector(".nameEntered");
  var displayResult = document.querySelector(".display");
  var button = document.querySelector(".greetBtn");
  var resetButton = document.querySelector(".resetBtn")
  var nameCount = document.querySelector(".countGreetings")
  //factory function

  var item = JSON.parse(localStorage.getItem('key'));
  var greeting = FactoryGreeting(item);
  nameCount.innerHTML= greeting.count();

  function helloFunc() {


    var name = nameVal.value;
    var checkedRadioBtn = document.querySelector("input[name = 'language']:checked")
    if (checkedRadioBtn) {
      var language = checkedRadioBtn.value;
      displayResult.innerHTML = greeting.checkGreet(language, name);
    }

    if ( displayResult.innerHTML == ''){
         displayResult.innerHTML = 'Please enter a name and language'
     }

    localStorage.setItem('key',JSON.stringify(greeting.userMap()));

    nameCount.innerHTML= greeting.count();

  }




  // Event listeners
  button.addEventListener("click", helloFunc);
  resetButton.addEventListener("click",function(){
    localStorage.clear();
    window.location.reload();
    nameCount.innerHTML = 0;

  });
