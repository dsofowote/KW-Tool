/**
 * Telemetry Class
 * Copyright (c) InSkin Media Ltd, http://www.inskinmedia.com
 ******************************************************************************/
(function() {
  LIB.Telemetry = Telemetry;

  /**
   * Constructor.
   */
  function Telemetry(integration) {
    this.integration = integration;

    this._timers = {};
    this.startTimer('since-load');

    // which telemetry features are enabled (true) or disabled (false):
    this._features = {
      'custom': true,
      'impression': false,
      'failed-test': false,
      'ad-call': false,
      'ad-call-response': false,
      'base-ready': false,
      'ad-served': false,
      'window-load': false,

      'keywords': false,
      'url': false
    };

    this._adcalls = {};
  }

  var proto = Telemetry.prototype;

  /**
   * Enable/disable telemetry features, which affects what we send to the
   * server.
   */
  proto.setup = function(options) {
    util.extend(this._features, options);

    if (this._features.keywords || this._features.url) {
      this._features.impression = true;
    }
  };

  /**
   * Send one or more telemetry events to the server.
   */
  proto.send = function() {
    var endpointUrl = 'https://ism-telemetry.appspot.com/rec';

    for (var i = 0; i < arguments.length; i++) {
      var evt = arguments[i];

      for (var key in evt) {
        var prefix = key.substr(0, 2);
        if (prefix == 'a_' || prefix == 'b_' || prefix == 'i_') {
          var newKey = key.slice(2);

          if (prefix == 'a_') {
            if (evt[key]) {
              evt[newKey] = evt[key].split(',');
            }
          }
          else {
            evt[newKey] = evt[key];
          }

          delete evt[key];
        }
      }

      // add some generic data to each event:
      evt.pubfileId = this.integration.id;
      evt.platform = this.integration.meta.platform || 'unknown';
      evt.ua = navigator.userAgent;
      evt.version = this.integration.BUILD_ID;

      var payload = JSON.stringify(evt);

      if (this.isIE9) {
        var img = new Image();
        img.src = endpointUrl + '?d=' + encodeURIComponent(payload);
      }
      else {
        var http = new XMLHttpRequest();
        http.open('POST', endpointUrl);
        http.send(payload);
      }
    }
  };

  /**
   * Record a custom event.
   */
  proto.recordCustom = function(label, value) {
    this.send({
      'type': 'custom',
      'label': label,
      'value': value || 0,
      'url': window.location.href
    });
  };

  /**
   * Record an impression.
   */
  proto.recordImpression = function() {
    var evt = {
      'type': 'impression',
      'tagVersion': this.integration.params.version || null
    };

    if (this._features.keywords) {
      evt.keywords = util.getPageKeywords();
    }

    if (this._features.url) {
      evt.url = window.location.href;
    }

    this.send(evt);
  };

  /**
   * Record a failed test.
   */
  proto.recordFailedTest = function(name, reason) {
    this.send({
      'type': 'failed-test',
      'name': name,
      'reason': reason
    });
  };

  /**
   * Record an ad call.
   */
  proto.recordAdCall = function() {
    this._saveAdCallRequest();

    var evt = {
      'type': 'ad-call',
      'i_delay': this.getTimer('since-load')
    };

    // add additional information about this ad call to the event:
    this.addAdCallRequestData(evt);

    this.send(evt);
  };

  proto._saveAdCallRequest = function() {
    var params = this.integration.params,
        data = null;

    switch (params.plr_AdProvider) {
      case 'ISAP':
        data = {
          'invalid': this.integration.invalid,
          'direct': params.plr_DirectAdCall && params.plr_DirectAdCall.toString() == 'true',
          'sectionId': params.srv_SectionID || '',
          'advertId': params.srv_AdvertIDs || ''
        };
      break;

      case 'MFAD':
        data = {
          'invalid': this.integration.invalid,
          'siteId': params.mf_siteId || ''
        };
      break;
    }

    if (data !== null) {
      this._adcalls[params.plr_AdProvider] = {
        'request': data
      };
    }
  };

  /**
   * Record an ad call response.
   */
  proto.recordAdCallResponse = function(response) {
    this._saveAdCallResponse(response);

    var evt = {
      'type': 'ad-call-response',
      'i_delay': this.getTimer('since-load')
    };

    // add ad call & ad response data to the event:
    this.addAdCallRequestData(evt);
    this.addAdCallResponseData(evt);

    if (!this.integration.invalid) {
      this.send(evt);
    }
  };

  proto._saveAdCallResponse = function(response) {
    var provider = this.integration.params.plr_AdProvider;

    if (!this._adcalls[provider]) {
      return;
    }

    // at this point, responses from AdZerk will look like ISAP because of the
    // transformations we make in Integration.class.js:

    if (response && response.PageSkinAd) {
      this._adcalls[provider].hasResponse = true;

      this.response = {
        'sectionId': response.SectionID || '',
        'campaignId': response.PageSkinAd.CampaignID,
        'lineItemId': response.PageSkinAd.LineItemID || '',
        'advertId': response.PageSkinAd.AdvertID,
        'creativeId': response.PageSkinAd.CreativeID,
        'productType': response.PageSkinAd.ProductType,
        'vertical': response.PageSkinAd.Vertical || ''
      };
    }
    else {
      this.response = {};
    }
  };

  /**
   * Record base 'ready' event.
   */
  proto.recordBaseReady = function() {
    var evt = {
      'type': 'base-ready',
      'i_delay': this.getTimer('since-load')
    };

    // add ad cal & ad response data to the event:
    this.addAdCallRequestData(evt);
    this.addAdCallResponseData(evt);

    this.send(evt);
  };

  /**
   * Record an ad served event.
   */
  proto.recordAdServed = function() {
    var evt = {
      'type': 'ad-served',
      'i_delay': this.getTimer('since-load')
    };

    // add ad cal & ad response data to the event:
    this.addAdCallRequestData(evt);
    this.addAdCallResponseData(evt);

    this.send(evt);
  };

  /**
   * Record window 'load' event.
   */
  proto.recordWindowLoad = function() {
    var evt = {
      'type': 'window-load',
      'i_delay': this.getTimer('since-load')
    };

    // add ad cal & ad response data to the event:
    this.addAdCallRequestData(evt);
    this.addAdCallResponseData(evt);

    this.send(evt);
  };

  /**
   * Add (latest) ad call request data to an event.
   */
  proto.addAdCallRequestData = function(evt) {
    var provider = this.integration.params.plr_AdProvider;

    if (!this._adcalls[provider] || !this._adcalls[provider].request) {
      return;
    }

    var request = this._adcalls[provider].request;

    evt.provider = provider;

    if (request.invalid) {
      evt.b_invalid = true;
    }

    switch (provider) {
      case 'ISAP':
        if (request.direct) {
          evt.b_direct = true;
        }

        if (request.sectionId) {
          evt.sectionId = request.sectionId;
        }
      break;

      case 'MFAD':
        if (request.siteId) {
          evt.siteId = request.siteId;
        }
      break;
    }
  };

  /**
   * Add (latest) ad response data to an event.
   */
  proto.addAdCallResponseData = function(evt) {
    var provider = this.integration.params.plr_AdProvider;

    if (!this._adcalls[provider]) {
      return;
    }

    var response = this.response || {};
    var exclude = ['vertical'];

    for (var k in response) {
      if (indexOf(exclude, k) >= 0) {
        continue;
      }

      evt[k] = response[k];
    }
  };

  /**
   * Start a timer.
   */
  proto.startTimer = function(name) {
    var timer = this._timers[name] || (this._timers[name] = {'total': 0});

    if (!timer.started) {
      timer.started = true;
      timer.since = (new Date()).getTime();
    }
  };

  /**
   * Stop a timer.
   */
  proto.stopTimer = function(name) {
    var timer = this._timers[name] || null;

    if (timer && timer.started) {
      timer.started = false;
      timer.total += (new Date()).getTime() - timer.since;
    }

    return this.getTimer(name);
  };

  /**
   * Get a timer's value.
   */
  proto.getTimer = function(name) {
    var timer = this._timers[name] || null,
        total = 0;

    if (timer) {
      total = timer.total;
      if (timer.started) {
        total += (new Date()).getTime() - timer.since;
      }
    }

    return total;
  };

  /**
   * Send a timer's value to the server.
   */
  proto.sendTimer = function(name, cap) {
    var t = this.getTimer(name);
    if (cap) {
      t = Math.min(cap, t);
    }

    if (t) {
      this.recordCustom('timer-' + name, t);
    }
  };

  // implement simple indexOf() function for arrays, as IE8 doesn't support
  // this natively:
  function indexOf(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  }

  // create a GUID:
  // http://stackoverflow.com/a/8809472
  function guid() {
    var ts = (new Date()).getTime();
    
    var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    id.replace(/[xy]/g, function(c) {
      var r = (ts + Math.random()*16)%16 | 0;
      ts = Math.floor(ts/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });

    return id;
  }
})();
