  function FactoryGreeting(people) {
    var greet = '';
    var temp = {};

    if (people) {
      temp = people;
    }

    function checkGreet(language, name) {
      if(name != Number.NaN){
        return greet + "Please enter a name"
      }

      if (name != '') {
        if (temp[name] === undefined) {
          temp[name] = 0;
        }
      }

      if (language === "English") {
        greet = 'Hello ' + name;
      }
      if (language === "Spanish") {
        greet = 'Hola ' + name;
      }
      if (language === "French") {
        greet = 'Bonjour ' + name;
      }

      return greet;
    }

    function count() {
      return Object.keys(temp).length;
    }

    function userMap(){
      return temp;
    }



    return {
      checkGreet,
      count,
      userMap,
    }
  }
