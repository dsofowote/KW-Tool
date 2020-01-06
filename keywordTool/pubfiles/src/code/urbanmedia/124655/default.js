integration.meta = {
	"sectionID" : "124655",
	"siteName" : "Tagesspiegel",
	"publisher" : "urbanmedia",
	"platform" : "tablet"
};


//

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706534',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_URLKeywords" : 2,
	"plr_HideElementsByID" : "",
	//'plr_ScrollAdjustment' : -178,
	"plr_FastInit" : true
};

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$('.ts-up-button').css({
		"right" : integration.custom.FrameSideRight + 40
	});
	$("head").append('<style>.ts-up-button{left: auto !important;}</style>');
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('ts-centred-small');
		if ($("body #hcf-zr12qtz-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body #hcf-zr12qtz-wrapper");
			var pageHeight = -45 - ($("#hcf-zr12qtz-wrapper").outerHeight());
			if ($("#hcf-zr12qtz-wrapper").outerHeight() > 10) {
				var scrollAdjustment = -205 - $("#hcf-zr12qtz-wrapper").outerHeight();
			} else {
				var scrollAdjustment = -178;
			}
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : pageHeight,
				plr_ScrollAdjustment : scrollAdjustment
			});
		}
		$('.hcf-ad-sky, .hcf-ad-bigsize, .ts-zr12qtz-sky-right').hide();
		$('#hcf-wrapper').css({
			'width' : '1000px'
		});
		$('head').append('<style>#hcf-stage {margin-left: 0px !important;}</style>');
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$('.ts-desktop .ts-content-wrapper, .ts-desktop div[class~=hcf-faux-col]').css({
				'width' : '990px',
			});
			$('.ts-header, .ts-topics-list').css({
				'margin-left' : '-20px',
				'width' : '1320px'
			});
			$('.ts-header > .ts-stage-wrapper').css({
				'padding-right' : '285px'
			});
			$('.ts-page-wrapper .ts-stage-wrapper .ts-stage').css({
				'width' : '990px',
			});
			$('#UrbanFooterContainer').css({
				'margin-left' : '105px',
				'width' : '1000px'
			});
			$('.ts-page-wrapper .ts-stage-wrapper').css({
				'padding' : '0px'
			});
		} else {
			$('.ts-stage').css({
				'margin' : '0 auto'
			});
			$('.ts-page-wrapper .ts-stage-wrapper').css({
				'padding' : '0'
			});
			$('.ts-desktop .ts-breaking-news-area, .ts-desktop .ts-stage-wrapper, .ts-desktop .ts-breaking-news-stage, .ts-desktop .ts-newsticker-bar').css({
				'margin' : '0 auto',
				'max-width' : '1000px',
				'min-width' : '0px'
			});
			$('.ts-header .ts-stage-wrapper').css({
				'max-width' : '1000px',
				'min-width' : '100%',
				'padding' : '0 100px'
			});
			$('#UrbanFooterContainer').css({
				'margin' : '0 auto',
				'width' : '1000px'
			});
		}
		if (integration.params.version) {
		} else {
			var URL = window.location.href;
			integration.telemetry.recordCustom(URL);
		}
	}
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 200);
	$('.ism-frame').parent().css({
		'z-index' : '10002'
	});
	/* Publisher asked for 10px padding between PageSkin and content */
	$('#hcf-wrapper').css({
		'padding-top' : '0px'
	});
	$('#hcf-wrapper').css({
		'padding-bottom' : '10px'
	});
});

/* Passback Tag */
/*window.ISMPassback = function() {
 return "<script type=\"text/javascript\" language=\"JavaScript\">\nif(typeof(asm_bkfl) != \"object\" || (typeof(asm_bkfl) != \"object\" && asm_bkfl == null) || !asm_bkfl){\n asm_bkfl = new Object(); asm_bkfl.use = 0; \n}\nif(asm_bkfl.use == 0){\n asm_bkfl.use = 1; \n}\nconsole.log('ISM passback');\nvar inskin_wallpaper_sky_backfill_check = true;\n<\\script>";
 };*/