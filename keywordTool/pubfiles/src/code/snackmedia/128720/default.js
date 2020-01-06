integration.meta = {
    'sectionID' : '128720',
    'siteName' : 'Transfer Tavern - Tablet - ( UK )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1032758',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    	integration.custom.FrameSide = e.data.plr_FrameSide;
    	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		/* content width divided by 2 */
		$("#mc_scoreboard").css({
			"left" : integration.custom.FrameSide  + 2
		});
		$(".fly-to-top").css({
			"right" : integration.custom.FrameSideRight  + 2
		});

        $("head").append("<style>.foot-copy{padding-left: 10px;} .foot-menu{padding-right: 10px;}</style>");
        $("head").append("<style>body{display: initial !important}</style>");
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#site, #main-nav-wrap').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
            integration.on("adServed", function(e) {
                  $(".ism-frame").parent().css({"left" : "20px"});
            });

        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s)\n{d=w.document;w.ggv2id=t;s=d.createElement('script');\ns.async=true;s.src='https://js.gumgum.com/services.js';\nd.getElementsByTagName('head')[0].appendChild(s);}\n(top,'6cdf4082'));<\\script>";
};
