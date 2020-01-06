// in case we're already loaded, stop here and record this to the telemetry
// server:
if (ns.loadedPublisherScripts[integration.id]) {
  var adtagParams = ns.integration._getAdTagParams(),
      label;
  if (adtagParams && adtagParams.srv_AdvertIDs) {
    label = adtagParams.srv_AdvertIDs.toLowerCase();
  }
  else {
    label = 'unknown';
  }

  // new telemetry:
  url = 'https://ism-telemetry.appspot.com/rec?d=' + encodeURIComponent(JSON.stringify({
    type: 'custom',
    label: 'dup-adcall-' + label,
    value: 0,
    url: window.location.href,
    pubfileId: integration.id,
    platform: integration.meta.platform || 'unknown',
    ua: navigator.userAgent
  }));

  img = new Image();
  img.src = url;

  return;
}

// mark the fact this Publisher Script file was loaded:
ns.loadedPublisherScripts[integration.id] = true;
ns.integration = integration;

// do stuff once integration parameters are "ready":
integration.once('parametersSet', function(e) {
  // call publisher's impression tracker:
  if (this.params.plr_ImpressionURL) {
    util.loadURL(this.params.plr_ImpressionURL);
  }

  if (!this.v2AdTag) {
    integration.telemetry.recordCustom('v1adtag');
  }
});

// set things in motion:
integration.load();
