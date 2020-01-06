integration.meta = {
  "sectionID": "124487",
  "siteName": "The Official Charts Company",
  "publisher": "officialcharts",
  "platform": "desktop"
};

integration.testParams = {
  "desktop_resolution": [0]
};

//for escaping iframe
function setWindow() {
  return currentWindow.top;
}

integration.params = {
	'mf_siteId': '681769',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1100,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  "plr_FastInit" : true,
  'plr_CheckOptOut': true,
  'plr_ConsentString': "BOWgA1yOWgA1yAKABBENBxoAAAAiCALgAUABYAFQALgAZABAAEQAI8ATgBPAEsAQgAwI",
  'plr_PageScanExclude' : ' .site-header, .site-footer, #conversation '
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $('body').addClass('pageskin-on');
    //$(".adspace-top").hide();
    try {
      adLayout.pageSkinCallback();
    } catch (e) {}
  }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script type=\"text/javascript\" src=\"//uk.ads.justpremium.com/adserve/js.php?zone=58036\"><\\script>";
};