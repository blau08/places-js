describe('task', function() {
  it("will create a new object with a location", function() {
    var task = {name: "Walk the dog"};
    expect(task.name).to.eql("Walk the dog")
  });
});
