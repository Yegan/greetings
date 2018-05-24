  describe("The number displayed next to the textbox should count the number of people greeted, and keep count of each person greeted", function() {

    it("The count function should keep record/count of the people greeted", function() {

      var countFunc = FactoryGreeting();

      countFunc.checkGreet('English','Yegan');
      countFunc.checkGreet('English','Andrew');
      countFunc.checkGreet('English','Anele');

      assert.equal(countFunc.count(), 3);
    });

    it("The count function should keep record/count of the people greeted", function() {

      var countFunc = FactoryGreeting({ "Yegan" : 0 });
      countFunc.checkGreet('English','Andrew');
      assert.equal(countFunc.count(), 2);

    });

    it("The count function should keep record/count of the people greeted", function() {

      var countFunc = FactoryGreeting({ "Yegan" : 0 });
      assert.equal(countFunc.count(), 1);

    });

    it("The count function should keep record/count of the people greeted", function() {

      var countFunc = FactoryGreeting({});
      assert.equal(countFunc.count(), 0);

    });

    it("The count function should keep record/count of the people greeted", function() {

      var countFunc = FactoryGreeting({ "yegan" : 0 });
      countFunc.checkGreet('English','andrew');
      assert.deepEqual(countFunc.userMap(), {
        "yegan" : 0,
        "andrew" : 0
      });

    });


  });
