  describe("The number displayed next to the textbox should count the number of people greeted, and keep count of each person greeted", function() {
    it("The count function should keep record/count of the people greeted", function() {

      var countFunc = FactoryGreeting();

      countFunc.checkGreet('English','Yegan');
      countFunc.checkGreet('English','Andrew');
      countFunc.checkGreet('English','Anele');

      assert.equal(countFunc.count(), 3);
    });
  });
