integration.meta = {
   'sectionID' : '124510',
   'siteName' : 'Sky News - (CREATIVE APPROVAL) - Desktop - (UK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1270]
};

integration.channelHome = [
   '/',
   '/uk',
   '/brexit',
   '/trump',
   '/world',
   '/business',
   '/politics',
   '/entertainment',
   '/strangenews',
   '/weather',
   '/technology',
   '/us'
];

integration.params = {
  'mf_siteId': '681788',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1010,
  "plr_URLKeywords": 1,
  "plr_UseFullVersion": true,
  "plr_HideElementsByClass": "ad",
  // 'plr_PageScanExclude' : '.site-secondary, .sdc-site-outbrain, script',
  'plr_FastInit' : true,
  'plr_PageScanExclude' : ' #nav-wrap, .sdc-news-footer, .ob-widget-section '
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#cookie-notice, .header, .ad--leaderboard, .sdc-site-au, .sdc-news-footer, .sdc-site-header, .shine--generic, .footer").css({
      "max-width": "1010px",
      "margin": "0 auto"
    });
    $(".ad--leaderboard").hide();
    $('head').append('<style type="text/css">.sdc-site-au--full-bleed {display: none !important}</style>');
  }
});

/* Passback Tag
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skynews\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>";
};*/

window.ISMPassback = function() {
  return "<script language='javascript' type='text/javascript'>\nrp_resize=function(e){var t,n,r,i;n=e.substring(0,e.indexOf(\"x\"));i=e.substring(e.indexOf(\"x\")+1,e.length);t=window.frameElement;if(t.getBoundingClientRect().height){r=t.getBoundingClientRect().height}else{r=t.offsetHeight}if(!t.height){t.setAttribute(\"height\",parseInt(i))}else{t.height=parseInt(i)}if(t.style.height)t.style.height=parseInt(i)+\"px\";if(!t.width){t.setAttribute(\"width\",parseInt(n))}else{t.width=parseInt(n)}if(t.style.width)t.style.width=parseInt(n)+\"px\"};rpc=function(e){if(e.status===\"ok\"){var t;var n;for(var r=0;r<e.ads.length;r++){t=e.ads[r];if(t.status===\"ok\"){if(t.type===\"script\"){document.write(\"<script type='text/javascript'>\"+t.script+\"</scr\"+\"ipt>\")}if(t.type===\"html\"){document.write(t.html)}rp_resize(\"\"||RubiconAdServing.AdSizes[t.size_id].dim)}else{document.write(\"<div>status=\"+t.status+\"</div>\")}}}}\nrpc = function(rs)\n{\n\tif (rs.status === 'ok') {\n\t\tvar ad;\n\t\tvar html;\n\t\tfor (var i=0; i < rs.ads.length; i++) {\n\t\t\tad = rs.ads[i];\n\t\t\tif (ad.status === 'ok') {\n\t\t\t\tif (ad.type === 'script') {\n\t\t\t\t\tdocument.write('<script type=\\'text/javascript\\'>'+ad.script+'</scr'+'ipt>');\n\t\t\t\t}\n\t\t\t\tif (ad.type === 'html') {\n\t\t\t\t\tdocument.write(ad.html);\n\t\t\t\t}\n\t\t\t\trp_resize('970x250');\n\t\t\t\t// Publisher impression tracking could be added here\n\t\t\t} else {\n\t\t\t\t// Replace this line with publisher callback/passback or next step trigger\n\t\t\t\tdocument.write('' +\n\t\t\t\t\t'<!--  Begin Rubicon Project Tag -->' +\n\t\t\t\t\t'<!--  Site: Sky UK Sky News - RTB Only   Zone: PC ROS   Size: Leaderboard  -->' +\n\t\t\t\t\t'<scr'+'ipt language=\\'JavaScript\\' type=\\'text\\/javascript\\'>' +\n\t\t\t\t\t'rp_account   = \\'7908\\';' +\n\t\t\t\t\t'rp_site      = \\'18314\\';' +\n\t\t\t\t\t'rp_zonesize  = \\'218716-2\\';' +\n\t\t\t\t\t'rp_adtype    = \\'js\\';' +\n\t\t\t\t\t'rp_smartfile = \\'[SMART FILE URL]\\';' +\n\t\t\t\t\t'rp_kw        = \\'[INSERT KEYWORD HERE]\\';' +\n\t\t\t\t\t'<\\/scr'+'ipt>' +\n\t\t\t\t\t'<scr'+'ipt type=\\'text\\/javascript\\' src=\\'https:\\/\\/ads.rubiconproject.com\\/ad\\/7908.js\\'><\\/scr'+'ipt>' +\n\t\t\t\t\t'<!--  End Rubicon Project Tag -->' +\n\t\t\t\t'');\n\t\t\t}\n\t\t}\n\t}\n}\n<\\script>\n\n<!--  Begin Rubicon Project Tag -->\n<!--  Site: Sky UK Sky News - RTB Only   Zone: PC ROS   Size: IAB Billboard  -->\n<script language='JavaScript' type='text/javascript'>\nrp_account   = '7908';\nrp_site      = '18314';\nrp_zonesize  = '218716-57';\nrp_adtype    = 'jsonp';\nrp_smartfile = '[SMART FILE URL]';\nrp_callback  = rpc;\n<\\script>\n<script type='text/javascript' src='https://ads.rubiconproject.com/ad/7908.js'><\\script>\n<!--  End Rubicon Project Tag -->";
};
