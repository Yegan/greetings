function FactoryGreeting() {
  var greet = ''
  var textbox = ''


  function checkGreet(language, name){
    if (name != '') {
      textbox = name
    }

    if (language === "English") {
      greet = 'Hello ' + name
    }
    if (language === "Spanish") {
      greet = 'Hola ' + name
    }
    if (language === "French") {
      greet = 'Bonjour ' + name
    }
    return greet

  }

  return {
    checkGreet,
  }
}
