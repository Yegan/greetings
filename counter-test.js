describe("This function should not count the same name twice", function(){
  it("Take in a name, once stored should not add this name to the count", function(){
    var counter = FactoryGreeting();

    counter.checkGreet("English", "Yegan");
    counter.checkGreet("English", "Yegan");

    assert.equal(counter.count(),1);
  });
});
