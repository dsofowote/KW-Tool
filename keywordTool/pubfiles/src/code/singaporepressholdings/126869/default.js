integration.meta = {
	'sectionID' : '126869',
	'siteName' : 'Hardware Zone - Smartphone - (SG)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707845',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_FixedCloseButton' : true,
	"plr_ScrollAdjustment" : 60
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .mobile-share-icon {right: 92px !important;}';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
		$('head').append(stylesCSS);
		window.unloadPageskin = function () {
			try {
				integration.destroy();
				$('body').removeClass('inskinLoaded');
			} catch (e) {}
		};
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('layoutChange', function() {
	$(document).on("scroll", function() {
		//Checks layout & if sticky nav is present
		var headerCheck = $("body.is-navSticky_show .nav-header").length;
		var headerTop = $("body.is-navSticky_")
		var navHeight = $("#nav-mb-main").outerHeight();
		var newValue = 'body.inskinLoaded{padding-right:0px !important}';
		var forumPage = $(".bodywrapping").length;

		if (headerCheck == 1 && forumPage == 0) {
			integration.base.setCfg({
				plr_ScrollAdjustment : 60
			});
		} else {
			integration.base.setCfg({
				plr_ScrollAdjustment : 0
			});
		}

		document.getElementById("inskinStyles").innerHTML = newValue;
	});

});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	//$("#inskinanchor").remove();
});
