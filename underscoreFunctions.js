//Re writing underscore library for Functions only
//The goal here is to gain a better understanding of higher order
//functions in JS

// Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. Optionally, pass arguments to the function to pre-fill them, also known as partial application. For partial application without context binding, use partial.

// var func = function(greeting){ return greeting + ': ' + this.name };
// func = _.bind(func, {name: 'moe'}, 'hi');
// func();
// => 'hi: moe'

var bind = function (function, object, arguments) {
  
}

var memoize = function (fn) {
      
  var memo = function () {
    //we can't just set args to arguments here, if we do that then
    //the variable is statically set to the argument passed in the first time
    var args = Array.prototype.slice.call(arguments);

    if (cache[args]) {
      return cache[args];
    } else {
      cache[args] = fn.apply(this, args);
      return cache[args];
    }
  }

  var cache = {};
  return memo;

}
//calls a function that as long as it is invoked will not be
//triggered.  It will execute after it stops being called for
//N milliseconds

//Our first mistake in this function is in dealing with the
//apply method.  We need to wrap our apply in a function
//So that we can ACTUALLY call it as such

var debounce = function (fun, wait, immediate) {
  
  // var callFunction;
  var timer;

  return function () {
    var args = Array.prototype.slice.call(arguments);
    var context = this;
    //when function is called, call it with set timeout.
    var applied = function() {
      fun.apply(context, args);
    }
    
    clearTimeout(timer);
    timer = setTimeout(applied, wait);
  }
}

var once = function (input) {

  var returned = false;

  return function() {

    if (!returned) {
      returned = true;
      return input.apply(this, arguments)
    };

  }

}


