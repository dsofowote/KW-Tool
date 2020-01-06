/**
 * Simple JavaScript Inheritance
 * http://ejohn.org/blog/simple-javascript-inheritance/
 ******************************************************************************/
(function() {
  var fnTest = (/xyz/.test(function(){var xyz;}) ? /\b_super\b/ : /.*/),
      initializing = false;

  LIB.BaseClass = function() {};

  LIB.BaseClass.extend = function(prop) {
    var _super = this.prototype;

    initializing = true;
    var prototype = new this();
    initializing = false;

    for (var name in prop) {
      if (
        typeof(prop[name]) == 'function'
        &&
        typeof(_super[name]) == 'function'
        && 
        fnTest.test(prop[name])
      ) {
        prototype[name] = (function(name, fn) {
          return function() {
            var tmp = this._super;
            this._super = _super[name];
            var ret = fn.apply(this, arguments);
            this._super = tmp;
            return ret;
          };
        })(name, prop[name]);
      }
      else {
        prototype[name] = prop[name];
      }
    }

    function NewClass() {
      if (!initializing && this.construct) {
        this.construct.apply(this, arguments);
      }
    }

    NewClass.prototype = prototype;
    NewClass.constructor = NewClass;
    NewClass.extend = arguments.callee;

    return NewClass;
  };
})();
