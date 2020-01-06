integration.meta = {
   'sectionID' : '127709',
   'siteName' : ' Journal des Femmes - Desktop - (BE) ',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '706504',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1300,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("app--ark");
	}
});

integration.on("adServed", function(e) {
  $("head").append("<style>#sidebar_follower{display:none}</style>");
  $(".page").css({
  	"overflow-x" : "hidden"
  });
  $("body").css({
    "background-image": "none",
    "padding-bottom": integration.base.getCfg("plr_FrameBottom").plr_FrameBottom + "px"
  });
  $(".ism-frame").css({
  	"z-index" : "151"
  });
  $("#ba_x02").css({
    "width": "1300px",
    "margin": "0 auto"
  });
  $("header, footer").css({
    "max-width": "1300px",
    "margin": "0 auto"
  });
});
/* Passback Tag */
window.ISMPassback = function() {
    return "<script src = \" https://acdn.adnxs.com/mediation/noad.js \" type = \"text / javascript\"> </ script>";
};
