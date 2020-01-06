integration.meta = {
   'sectionID' : '127903',
   'siteName' : 'Liberation - Desktop - ( FR )',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '920750',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true,
   'plr_CheckOptOut': true,
   'plr_ConsentString': "BOXVWosOXVWosAKABBENBxoAAAAiCAMgAUABYAFQALgAZABAADIAIgAR4AnACeAJYAhABgQ",
   'plr_URLKeywords' : 1,
   'plr_ScrollAdjustment' : 65
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var width = $(window).width();
	    if (width < 2200 || integration.custom.isSuperWide) { /* screen size of when button starts overlapping PageSkin */
	        var sideWidth = (width - 1000)/2; /* content width divided by 2 */
	        $(".paywall-alert").css({
	            "right" : sideWidth + 10
	        });
	    }
	    $(".footer-cnil, .menu").css({
	        "z-index" : "1002"
	    });
	    $(".pub-container").css({
	    	"display" : "none"
	    });
	     $(".article-box, .main-content").css({
	    	"margin-top" : "0"
	    });
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "1001"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://securite.01net.com/ac?out=js&nwid=13&siteid=291884&pgid=1074425&fmtid=95&tgt=origine%3Dinskin&visit=s&gdpr_consent=[sas_gdpr_consent]&tmstp=[timestamp]\"><\\script>\n";
};
