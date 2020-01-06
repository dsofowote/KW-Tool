/**
 * Useful functions.
 * Copyright (c) InSkin Media Ltd, http://www.inskinmedia.com
 ******************************************************************************/
(function() {
  util = {};

  /**
   * Deep extend (similar to jQuery.extend()).
   */
  util.extend = function(dst) {
    dst = dst || {};

    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];

      if (!obj) {
        continue;
      }

      for (var key in obj) {
        if (typeof(obj[key]) == 'object') {
          if (typeof(dst[key]) != 'object') {
            dst[key] = {};
          }
          util.extend(dst[key], obj[key]);
        }
        else {
          dst[key] = obj[key];
        }
      }
    }

    return dst;
  };

  /**
   * Get URL parameters.
   */
  util.getURLParams = function() {
    try {
      var r = {};
      var s = window.location.search.substring(1);
      var a = s.split('&');
      for (var i = 0; i < a.length; i++) {
        if (!a[i]) {
          continue;
        }
        var b = a[i].split('=');
        r[b[0]] = (b[1] ? decodeURIComponent(b[1]) : '');
      }
      return r;
    }
    catch (e) {
    }
    
    return {};
  };

  /**
   * Get all script parameters.
   */
  util.getScriptParams = function(re, sep) {
    if (!sep) {
      sep = '&';
    }

    var scripts = currentWindow.document.getElementsByTagName('script');
    var matches;
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].getAttribute('data-ism-processed') == 'true') continue;
      if (!(matches = scripts[i].src.match(re))) continue;

      scripts[i].setAttribute('data-ism-processed', 'true');

      var params = {};
      var str;

      // auto-detect separator in case the regexp contains 2 capturing blocks:
      if (matches.length == 3) {
        sep = matches[1];
        str = matches[2];
      }
      else {
        str = matches[1];
      }

      var a = str.split(sep);
      for (var j = 0; j < a.length; j++) {
        if (a[j] == '') continue;
        var b = a[j].split('=');
        params[b[0]] = (b[1] ? decodeURIComponent(b[1]) : '');
      }
      return params;
    }
  
    return null;
  };

  /**
   * Make a JSONP request. The 'params' object has the following fields:
   * .url - request URL
   * .data - data to send to server (as GET/query parameters)
   * .window - window object to use for request
   * .async - whether to make an async (true) or sync (false) request
   * .callback - function to call once the server returns a response
   * .flatten - flatten objects in data
   */
  util.jsonp = function(params) {
    var callbackName = 'ism_jsonp_' + util.random(),
        win = params.window || window,
        el;

    var url = params.url;
    url += (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;

    if (params.data) {
      for (var key in params.data) {
        var p = params.data[key],
            type = Object.prototype.toString.call(p);

        switch (type) {
          case '[object Array]':
            for (var i = 0; i < p.length; i++) {
              url += '&' + key + '=' + encodeURIComponent(p[i]);
            }
          break;

          case '[object Object]':
            var prefix = (!params.flatten ? key + '.' : '');
            for (var k in p) {
              url += '&' + prefix + k + '=' + encodeURIComponent(p[k]);
            }
          break;

          case '[object Boolean]':
            url += '&' + key + '=' + p.toString();
          break;

          default:
            url += '&' + key + '=' + encodeURIComponent(p);
        }
      }
    }

    win[callbackName] = function(json) {
      if (el) {
        el.parentNode.removeChild(el);
      }
      delete win[callbackName];

      if (params.callback) {
        params.callback(json);
      }
    };

    el = util.loadJS(url, win, params.async);
  };

  /**
   * Load a JS file.
   */
  util.loadJS = function(url, win, async, callback) {
    if (!win) {
      win = window;
    }

    if (!async && win.document.readyState == 'loading') {
      win.document.write('<scr' + 'ipt src="' + url + '"></scr' + 'ipt>');

      if (callback) {
        var callbackName = callbackName = 'ism_callback_' + util.random();
        win[callbackName] = function() {
          callback();
          delete win[callbackName];
        };

        win.document.write('<scr' + 'ipt>' + callbackName + '();</scr' + 'ipt>');
      }
    }
    else {
      var el = win.document.createElement('script');
      el.setAttribute('type', 'text/javascript');
      el.setAttribute('src', url);

      if (callback) {
        el.onload = callback;
      }

      var hd = win.document.getElementsByTagName('head')[0];
      if (hd) {
        hd.appendChild(el);
        return el;
      }
    }
  };

  /**
   * Run some JS code.
   */
  util.runJS = function(code, window) {
    if (window.document.readyState == 'loading') {
      window.document.write(code);
    }
    else {
      var re = /^\s*<script[^>]+src\s*=\s*("|')(.+)\1[^>]*>/i;
      var matches = code.match(re);
      if (matches) {
        util.loadJS(matches[2], window, true);
      }
      else {
        eval(code.replace(/^\s*<script[^>]*>|<\/script>\s*$/ig,''));
      }
    }
  };

  /**
   * Load a CSS file.
   */
  util.loadCSS = function(url, doc) {
    if (!doc) {
      doc = document;
    }

    var el = doc.createElement('link');
    el.setAttribute('type', 'text/css');
    el.setAttribute('rel', 'stylesheet');
    el.setAttribute('href', url);

    var hd = doc.getElementsByTagName('head')[0];
    if (hd) {
      hd.appendChild(el);
    }
  };

  /**
   * Get the document object from an (i)frame.
   */
  util.getFrameDoc = function(el, doc) {
    if (!doc) {
      doc = document;
    }

    if (typeof(el) == 'string') {
      el = doc.getElementById(el);
    }

    try {
      if (el) {
        if (el.contentDocument) {
          return el.contentDocument;
        }
        else if (el.contentWindow) {
          return el.contentWindow.document;
        }
        else {
          return el.document;
        }
      }
    }
    catch (e) {
    }

    return null;
  };

  /**
   * Get page keywords.
   */
  util.getPageKeywords = function(prefix) {
    if (prefix == undefined) {
      prefix = 'meta-';
    }

    var keywords = [];

    var metas = document.getElementsByTagName('meta');
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].name && metas[i].name.toLowerCase() == 'keywords') {
        if (metas[i].content) {
          var kws = metas[i].content.split(',');
          for (var j = 0; j < kws.length; j++) {
            var kw = kws[j].toLowerCase().replace(/[^a-z0-9]/g, '');
            if (kw.length > 1) {
              keywords.push(prefix + kw);
            }
          }
        }
      }
    }

    return keywords;
  };

  /**
   * Get URL path keywords.
   */
  util.getURLPathKeywords = function(depth) {
    var keywords = [];

    var path = window.location.pathname.split('/'),
        keyword = 'url',
        i = 1,
        d = 0;

    while (d < depth && i < path.length) {
      keyword += '-' + path[i];
      keywords.push(keyword);
      i++;
      d++;
    }

    return keywords;
  };

  /**
   * Ensure given keys of 'obj' are Booleans.
   */
  util.ensureBooleans = function(obj, keys) {
    var key;
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      if (typeof(obj[key]) != 'undefined') {
        obj[key] = (String(obj[key]).toLowerCase() == 'true' ? true : false);
      }
    }
  };

  /**
   * Ensure given keys of 'obj' are Integers.
   */
  util.ensureIntegers = function(obj, keys) {
    var key;
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      if (typeof(obj[key]) != 'undefined') {
        obj[key] = parseInt(obj[key]);
      }
    }
  };

  /**
   * Generate a random number.
   */
  util.random = function() {
    return Math.floor(Math.random() * 10e16);
  };

  /**
   * Extend a CSV string.
   */
  util.extendCSV = function(csv, value) {
    if (!csv) {
      csv = '';
    }

    return csv + (csv.length ? ',' : '') + value;
  };

  /**
   * Cookie functions (set/get/del).
   */
  util.setCookie = function(name, value, expires, path, domain, secure) {
    if (expires) {
      var now = new Date();
      now.setTime(now.getTime() + expires * 1000);
      expires = now;
    }
    var cookie = name + '=' + escape(value) +
      ((expires) ? '; expires=' + expires.toGMTString() : '') +
      ((path) ? '; path=' + path : '') +
      ((domain) ? '; domain=' + domain : '') +
      ((secure) ? '; secure' : '');
    document.cookie = cookie;
  };
  
  util.getCookie = function(name) {
    var dc = document.cookie;
    var prefix = name + '=';
    var begin = dc.indexOf('; ' + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    }
    else {
      begin += 2;
    }
    var end = document.cookie.indexOf(';', begin);
    if (end == -1) {
      end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
  };
  
  util.delCookie = function(name, path, domain) {
    if (this.getCookie(name)) {
      document.cookie = name + '=' +
        ((path) ? '; path=' + path : '') +
        ((domain) ? '; domain=' + domain : '') +
        '; expires=Thu, 01-Jan-70 00:00:01 GMT';
    }
  };
  
  /**
   * Functions to set/get data from client storage and transition from using
   * cookies to localStorage.
   */
  util.storageSet = function(key, obj, expiresIn) {
    if (expiresIn) {
      obj.__expires = (new Date()).getTime() + expiresIn * 1000;
    }

    // XXX: we assume this succeeds, but we may want to fallback to cookies in
    // case localStorage fails for some reason.
    localStorage.setItem(key, JSON.stringify(obj));

    // delete the cookie with the same key (i.e.: migrate away from cookies):
    util.delCookie(key, '/');
  };

  util.storageGet = function(key) {
    // we prefer data from localStorage:
    var str = localStorage.getItem(key) || util.getCookie(key),
        obj = (str ? JSON.parse(str) : {});

    if (obj.__expires) {
      if (obj.__expires < (new Date()).getTime()) {
        obj = {};
      }
      else {
        delete obj.__expires;
      }
    }

    return obj;
  };

  util.storageDel = function(key) {
    localStorage.removeItem(key);
    util.delCookie(key, '/');
  };

  /**
   * ISAP Cookies
   */
  util.setISAPCookies = function(json) {
    var cookies = {
      'Session': 1800,
      'Persistent': 1 * 365 * 24 * 60 * 60
    };

    try {
      for (var type in cookies) {
        var name = 'ISAP' + type;
        var value = json[type + 'Cookies'];

        if (!value) {
          if (value === null) {
            util.storageDel(name);
          }
          continue;
        }

        util.storageSet(name, util.extend(util.storageGet(name), value), cookies[type]);
      }
    }
    catch (e) {
    }
  };
  
  util.getISAPCookies = function() {
    try {
      var ISAPSession = util.storageGet('ISAPSession'),
          ISAPPersistent = util.storageGet('ISAPPersistent'),
          obj = util.extend({}, ISAPSession, ISAPPersistent),
          data = [];
  
      for (var key in obj) {
        data.push(key + '==' + obj[key]);
      }
  
      return (data.length ? {'vstrCookieData': data.join('&&')} : {});
    }
    catch (e) {
    }
  };

  /**
   * Load an URL.
   */
  util.loadURL = function(url, callback) {
    var img = new Image();

    if (callback) {
      img.onload = callback;
    }

    img.src = url;
  };

  /**
   * Compare two semantic version numbers.
   * https://github.com/substack/semver-compare/blob/master/index.js
   * Returns:
   *  1 when a > b
   *  0 when a = b
   * -1 when a < b
   */
  util.semvercmp = function(a, b) {
    var pa = a.split('.');
    var pb = b.split('.');
    for (var i = 0; i < 3; i++) {
      var na = parseInt(pa[i]);
      var nb = parseInt(pb[i]);
      if (na > nb) return 1;
      if (nb > na) return -1;
      if (!isNaN(na) && isNaN(nb)) return 1;
      if (isNaN(na) && !isNaN(nb)) return -1;
    }
    return 0;
  };


  /**
   * Bluekai Integration
   */
  util.bluekaiGet = function(callback, win, async) {
    util.loadJS('https://tags.bluekai.com/site/39716?ret=js&limit=1', win, async, function() {
      callback(win.bk_results || {});
    });
  };

  util.bluekaiSet = function(data) {
    window.bk_async = function() {
      //console.log('sending data to bluekai');

      for (var key in data) {
        //console.log(key, '->', data[key]);
        window.bk_addPageCtx(key, data[key]);
      }
      window.BKTAG.doTag(38862, 4);
    };

    util.loadJS('https://tags.bkrtx.com/js/bk-coretag.js', window, true);
  };

  /**
   * For AdZerk / MFAD frequency capping, save the view time for a flight ID.
   */
  util.saveFlightIdViewTime = function(flightId) {
    var now = Math.round((new Date()).getTime() / 1000),
        flightViewTimes = JSON.parse(util.getCookie('MFADFlightViewTimes') || '{}');

    flightViewTimes[flightId] = flightViewTimes[flightId] || [];
    flightViewTimes[flightId].push(now);

    // remove all flight view times older than 60 days and all flight IDs with
    // no view times:
    for (var id in flightViewTimes) {
      flightViewTimes[id] = flightViewTimes[id].filter(function(ts) {
        return ts + 86400 * 60 > now;
      });

      if (!flightViewTimes[id].length) {
        delete flightViewTimes[id];
      }
    }

    util.setCookie('MFADFlightViewTimes', JSON.stringify(flightViewTimes), 0, '/');
  };

  /**
   * Create an iframe and load some content into it (for example, to load some
   * JS code that uses document.write()) - useful to get trackers firing only,
   * because the iframe is hidden.
   */
  util.loadInIframe = function(html) {
    html = '<html><head></head><body>' + html + '</body></html>';

    var iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.height = '1px';
    iframe.style.width = '1px';
    iframe.style.left = '-10px';
    iframe.style.top = '-10px';

    document.body.appendChild(iframe);
    iframe.contentWindow.document.open('text/html', 'replace');
    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();
  };
})();
