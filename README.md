# Décorator

Links:

* http://www.dofactory.com/javascript/decorator-design-pattern
* https://www.sitepoint.com/javascript-decorators-what-they-are/
* https://babeljs.io/docs/plugins/transform-decorators/

Decorator = function() { return function(){ }}
Example:

```
function doSomething(name) {
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
  return function() {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  }
}

const wrapped = loggingDecorator(doSomething);

// Examples
doSomething('Graham');
// Hello, Graham

wrapped('Graham');
// Starting
// Hello, Graham
// Finished
```
