  var win = window, doc = win.document;

  // get script parameters:
  function getScriptURLParams(re, sep) {
    if (!sep) sep = '&';

    var scripts = doc.getElementsByTagName('script'),
        matches = null;
    
    for (var i = 0; i < scripts.length; i++) {
      if (!(matches = scripts[i].src.match(re))) continue;

      var params = {},
          str = '';

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
        params[b[0]] = (typeof(b[1]) != 'undefined' ? decodeURIComponent(b[1]) : '');
      }

      // get script parameters passed through another object defined on window:
      if (params.id && win[params.id]) {
        for (var k in win[params.id]) {
          params[k] = win[params.id][k];
        }
      }

      return params;
    }

    return null;
  }

  // load a JavaScript file:
  function loadJS(url, async) {
    var isIE = /MSIE/.test(navigator.userAgent);
    if (!async && (doc.readyState == 'loading' || (isIE && doc.readyState == 'interactive'))) {
      doc.write('<scr' + 'ipt type="text/javascript" src="' + url + '"></scr' + 'ipt>');
    }
    else {
      var hd = doc.getElementsByTagName('head')[0],
          el = doc.createElement('script');
      el.setAttribute('type', 'text/javascript');
      el.setAttribute('src', url);
      if (hd) {
        hd.appendChild(el);
      }
    }
  }
