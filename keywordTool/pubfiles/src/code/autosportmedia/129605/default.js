integration.meta = {
    'sectionID' : '129605',
    'siteName' : 'Inside EV\'s - Desktop - (UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1086028',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("head").append("<style>.root {max-width: 1024px !important; margin: 0 auto !important; overflow: visible !important; }</style>");
        $(".m1-header-main, .m1-header-main-box").css({"margin": "0 auto", "max-width": "1024px"});
        $(".m1-home-top-slider--full-width").css({"padding-top": "0px"});
        $(".m1-gapb-topside .m1-apb.super .ap").css({"display": "none"});

        $(".box-item-left").css({"left": "15px", "z-index": "3"});
        $(".m1-header-main-box-wrapper").css({"padding" : "0 115px 0 20px"});
        $(".box-item-pre-left").css({"flex-basis" : "calc(50% - 55px)"});
        $(".m1-header-main .m1-navigation-main>li").css({"margin" : "0 10px"});
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 970;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};