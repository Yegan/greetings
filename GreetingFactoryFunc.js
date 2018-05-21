  function FactoryGreeting() {
    var greet = '';
    var temp = {};


    function checkGreet(language, name) {
      if (name != '') {

        if(temp[name] === undefined){
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



      function count(){
        return Object.keys(temp).length;

      }




    return {
      checkGreet,
      count,
    }
  }
