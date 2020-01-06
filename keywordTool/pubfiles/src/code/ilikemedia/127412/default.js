integration.meta = {
   'sectionID' : '127412',
   'siteName' : 'Entrepreneur - Desktop - (INT)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1466]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '718782',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1206,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   if ($("#page-holder").length == 1) {
           $("#page-holder").prepend("<div id='inskinanchor'></div>");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -70,
           });
       };
       $("#page-scroller").css({
    	  "overflow" : "visible" 
       });
       $('head').append('<style type="text/css">#fsite, footer, .blackout {width:1206px !important; margin:0 auto;}</style>');
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "3"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade id='glade-aslot-1'\n      data-ad-unit-path='/6280/Entrepreneur'\n      width='728' height='90'\n      data-click-url='%%CLICK_URL_UNESC%%'\n      data-json='{\"targeting\": {\"kw\": [\"ilikemedia\"]}}'></div>\n<script async src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};