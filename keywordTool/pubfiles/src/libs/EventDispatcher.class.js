/**
 * EventDispatcher Class
 * Copyright (c) InSkin Media Ltd, http://www.inskinmedia.com
 ******************************************************************************/
(function() {
  LIB.EventDispatcher = LIB.BaseClass.extend({
    /**
     * Constructor.
     */
    'construct': function() {
      this.listeners = {};
    },

    /**
     * addEventListener.
     */
    'addEventListener': function(name, fn, thisObj) {
      if (!this.listeners[name]) {
        this.listeners[name] = [];
      }
      this.listeners[name].push({'fn': fn, 'thisObj': thisObj});
    },

    /**
     * removeEventListener.
     */
    'removeEventListener': function(name, fn, thisObj) {
      if (!arguments.length) {
        this.listeners = {};
        return;
      }

      if (!this.listeners[name]) {
        return;
      }

      if (!fn) {
        this.listeners[name] = [];
      }
      else {
        var l = this.listeners[name];
        for (var i = l.length - 1; i >= 0; i--) {
          if (l[i].fn === fn && l[i].thisObj === thisObj) {
            l.splice(i, 1);
          }
        }
      }
    },

    /**
     * dispatchEvent.
     */
    'dispatchEvent': function(name, data, target) {
      var l = [].concat(this.listeners[name] || []);
      l = l.concat(this.listeners['*'] || []);

      if (!l.length) {
        return;
      }

      var e = {'name': name, 'data': data, 'target': target || this};
      var fn;

      for (var i = 0; i < l.length; i++) {
        if (l[i].thisObj && typeof(l[i].fn) == 'string') {
          fn = l[i].thisObj[l[i].fn];
        }
        else {
          fn = l[i].fn;
        }

        if (typeof(fn) == 'function') {
          if (fn.apply(l[i].thisObj, [e]) === false) {
            return false;
          }
        }
      }
    },

    /**
     * forwardEvent.
     */
    'forwardEvent': function(e) {
      return this.dispatchEvent(e.name, e.data);
    }
  });
})();
