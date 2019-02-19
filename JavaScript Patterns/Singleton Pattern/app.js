const Singleton = (function() {
  let instance;

  function createInstance() {
    const obj = new Object({name:'Bigga'});
    return obj;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

// It will always return only 1 instance
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);