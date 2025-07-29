const userCorrected = {
  name: "Alice",
  greetDelayed: function() {
    const self = this;
    setTimeout(function() {
      console.log(`Hello, ${self.name}!`);
    }, 1000);
  }
};
