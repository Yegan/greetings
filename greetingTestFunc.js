describe("The greetings function", function(){
  it('This greetings test is checking if the name input is greeted in English', function(){
     var greetingFactory = FactoryGreeting()

     assert.equal(greetingFactory.checkGreet('English', 'Yegan'), 'Hello Yegan')

  });
});
