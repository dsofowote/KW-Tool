integration.meta = {
   'sectionID' : '125721',
   'siteName' : 'Sky News - PageSkin INTERNATIONAL',
   
   'platform' : 'desktop',
   'restrictions' : ''
};




integration.testParams = {
   'desktop_resolution' : [1279]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706733',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1024,
  "plr_URLKeywords": 1,
  "plr_UseFullVersion": true,
  "plr_HideElementsByClass": "ad"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#cookie-notice, .header, .ad--leaderboard, .shine--generic, .footer").css({
      "max-width": "1024px",
      "margin": "0 auto"
    });
    $(".ad--leaderboard").hide();
  }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skynews\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>"; 
};

