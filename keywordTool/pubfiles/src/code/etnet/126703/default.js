integration.meta = {
	'sectionID' : '126703',
	'siteName' : 'ETNet - Smartphone - (HK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707105',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -40
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

	}
});

integration.on('adServed', function(e) {
	var headerHeight = $("#Hdr").outerHeight();
	$(".ism-frame").parent().css({
		"top" : headerHeight
	});
	console.log("test");
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;

	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	
	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .sponsorAd{max-width:' + contentWidth + 'px !important}';
	stylesCSS += '.inskinLoaded #mobile_banner_native_1{max-width:' + contentWidth + 'px !important}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	$("body").addClass("inskinLoaded");

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	var stylesCSS = '<style id="inskinStyles2" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	var stylesCSS = '<style id="inskinStyles3" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});

	integration.custom.clickStatus = false;
	$("#MoreBtn.SliderBtn, #Lightbox").on('click touchstart', function() {
		integration.custom.widgetPos();
	});

	//integration.custom.widgetTop();
	$(window).on('scroll', function() {
		//integration.custom.widgetTop();
	});

});

integration.custom.widgetPos = function() {
	var barPos = 95 - integration.custom.FrameSideRight;
	var windowWidth = $(window).width();
	var btnPos = windowWidth - 18;

	if (integration.custom.clickStatus) {
		var newValue = ".inskinLoaded #MoreBar{left:" + (windowWidth - 4) + "px !important}";
		newValue += ".inskinLoaded #Container{position:relative} .inskinLoaded #MoreBtn{left:" + btnPos + "px !important}";
		integration.custom.clickStatus = false;
	} else {
		var newValue = ".inskinLoaded #MoreBar{left:" + barPos + "px !important}";
		newValue += ".inskinLoaded #Container{position:relative} .inskinLoaded #MoreBtn{left:2px !important}";
		integration.custom.clickStatus = true;
	}

	document.getElementById("inskinStyles2").innerHTML = newValue;
}

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var newValue = ".inskinLoaded #container{max-width:" + contentWidth + "px;padding-top:0px !important;}";
	newValue += ".inskinLoaded #PageTop{right:" + integration.custom.FrameSideRight + "px; z-index:0;}";
	newValue += ".inskinLoaded #MoreBar{max-width: " + (contentWidth - 20) + "px;}";
	document.getElementById("inskinStyles").innerHTML = newValue;
}

integration.custom.widgetTop = function() {
	var height = $(document).scrollTop();
	var windowHeight = $(window).height();
	var headerHeight = $("#Hdr").outerHeight();
	var availHeight = windowHeight - (headerHeight + integration.custom.PageSkinTopPanel);
	var contHeight = windowHeight - 155;

	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		var newValue = ".inskinLoaded #MoreBar{margin-top:" + newheight + "px !important}";
		var avHeight = availHeight - newheight;
		newValue += ".inskinLoaded #MoreBar{margin-top:" + avHeight + "px !important}";
	} else {
		var newValue = ".inskinLoaded #MoreBar{margin-top:0px !important}";
	}

	document.getElementById("inskinStyles3").innerHTML = newValue;
}
