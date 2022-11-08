function ExampleConstructor() {

}

console.log('value of prototype', ExampleConstructor.prototype);
console.log('typeof prototype', ExampleConstructor.prototype);

var callConstructor = new ExampleConstructor();
console.log('called constructor', callConstructor);

var instance = callConstructor instanceof ExampleConstructor;
console.log('instance of constructor', instance);
