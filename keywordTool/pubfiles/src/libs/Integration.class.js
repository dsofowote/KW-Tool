/**
 * Integration Class
 * Copyright (c) InSkin Media Ltd, http://www.inskinmedia.com
 ******************************************************************************/
(function() {
  LIB.Integration = LIB.EventDispatcher.extend({
    /**
     * Constructor.
     */
    'construct': function() {
      // initialize the base class:
      this._super();

      // Publisher Script ID:
      this.id = this.id || SCRIPT_ID; 

      // meta information about this integration:
      this.meta = {};

      // integration parameters:
      this.params = {};

      // parameters for integration tests:
      this.testParams = {};

      // failed integration tests:
      this.failedTests = {};

      // flagged integration tests:
      this.flaggedTests = [];

      // custom function or properties:
      this.custom = {};

      // should we try loading JS files using document.write? (no, by default):
      this.async = true;

      // enable telemetry test by default:
      this.enableTelemetryTest = true;

      // create the telemetry object:
      this.telemetry = new LIB.Telemetry(this);

      this.useLocalStorage = true;
    },

    /**
     * Load the base integration code.
     */
    'load': function() {
      var url = (util.getURLParams().BASE_URL || this.params.BASE_URL || CDN_URL + '4.1') + '/js/integration/base.gz.js',
          _self = this;

      util.loadJS(url, currentWindow, this.async, function() {
        for (var key in ns.LIB.IntegrationOverride) {
          _self[key] = ns.LIB.IntegrationOverride[key];
        }

        _self.init();
      });
    },

    /**
     * Get the ad tag parameters.
     */
    '_getAdTagParams': function() {
      var adtagParams = util.getScriptParams(new RegExp(
        this.id.replace('/', '\\\/') + '\\.js\\?autoload([^A-Za-z0-9]+)(.*)$'
      ));
      if (adtagParams && adtagParams.id) {
        var p = currentWindow[adtagParams.id] || window[adtagParams.id];
        if (p) {
          util.extend(adtagParams, p);
        }

        delete adtagParams.id;

        // mark the fact that a V2 ad tag was used:
        this.v2AdTag = true;
      }

      return adtagParams;
    },

    /**
     * Wrappers for adding/removing integration event listeners.
     */

    // on() - addEventListener:
    'on': function(name, fn) {
      this.addEventListener(name, fn, this);
    },

    // off() - removeEventListener:
    'off': function(name, fn) {
      this.removeEventListener(name, fn, this);
    },

    // once() - add an event listener only for the first time the event is
    // triggered:
    'once': function(name, fn) {
      var f = function(e) {
        this.removeEventListener(name, f, this);
        fn.call(this, e);
      };

      this.addEventListener(name, f, this);
    },

    // after the base file loads, bind its jQuery instance to our context:
    '_bindjQuery': function() {
      $ = this.$ = ISM.$;
    }
  });
})();
