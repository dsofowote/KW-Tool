integration.meta = {
   'sectionID' : '127721',
   'siteName' : 'Berliner Morgenpost - Desktop - ( DE )',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '858463',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $("head").append("<style>#omsv_sky_DhtmlLayer{z-index: 0 !important;}</style>");
   }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<div id=\"passback-container\"></div>\n\n<script>\n\n    var script = document.createElement('script');\n\n    script.src = 'https://www.googletagservices.com/tag/js/gpt.js';\n\n    document.getElementsByTagName('head')[0].appendChild(script);\n\n \n\n    window.googletag = window.googletag || {};\n\n    googletag.cmd = googletag.cmd || [];\n\n    googletag.cmd.push(function() {\n\n        googletag.pubads().display('/39216077/sta_morgenpost/homepage/sb1', [728, 90], 'passback-container');\n\n    });\n\n<\\script>\n\n";
};