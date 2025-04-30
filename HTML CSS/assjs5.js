const myObj = {
  value: 42,
  delayedLog: function() {
    setTimeout(function() {
      console.log(this.value); 
    }, 500);
  }
};
myObj.delayedLog();

const myObjFixed = {
  value: 42,
  delayedLog: function() {
    setTimeout(() => {
      console.log(this.value); 
    }, 500);
  }
};
myObjFixed.delayedLog();
