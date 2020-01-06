integration.meta = {
	'sectionID' : '127939',
	'siteName' : 'TOnline - Tablet - ( AT BE CH DE LU )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '953068',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_UseFullVersion" : true,
	"plr_URLKeywords" : 2,
	"plr_HideElementsByID" : "",
  'plr_StartScrollOnAnchor' : true,
	"plr_FastInit" : true,
  'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg"
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        integration._addPixel();
        $("#Tfixdh, #Tglobhead").css({
            "width": "100%",
            "margin": "0 auto",
            "left": "0",
            "right": "0"
        });
        $("#Tfixdhi").css({
            "width": "99%",
            "padding-left": "0"
        });
        $('head').append('<style type="text/css">.Tfixnavo:after {display: none !important;}</style>');
        $("#Tglobhead .CDB-global-header, .Tblock1 #Tcopyr, #Tglobhead .CDB-container").css({
            "margin-left": "0",
            "padding-right": "0"
        });
        $("#Tall, #Tfoot, .Tblock1 #Tfootblock").css({
            "max-width": "970px",
            "width": "100%",
            "margin": "0 auto",
            "left": "0",
            "right": "0"
        });
        if ($("#Tfixdh").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#Tfixdh");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -120
            });
        }
        // $("#inskinanchor").css({
        //     "margin-top": "105px"
        // });
        $("#Tasf").hide();
        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            integration.base.setCfg({
                plr_PageAlignment: "left"
            });
            $('head').append('<style type="text/css">#Tall{margin: 0 !important;}</style>');
        }
        $("head").append("<style>div#Tcb.sdgSlotContainer.sdgSlotName-banner{display: none !important;}</style>");
    }
});
