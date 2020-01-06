integration.meta = {
	'sectionID' : '128524',
	'siteName' : 'Cosmopolitan - (Pagelead) - Smartphone- (AU) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1020899',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedTop' : true,
	'plr_EnableSwipe' : false,
	'plr_HideFixedTopAfter' : 5000,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		//Adjust pagelead based on current state of header when pagelead loads
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style id="inskinPL1" type="text/css">';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		var newValue;
		var headHeight = $("header.header.header--pinned").outerHeight();
		var headerCheck = $("header.header.header--hide").length;
		console.log(headerCheck);
		if (headerCheck == 1) {
			newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
			$("#inskinPL1").html(newValue);
		} else {
			newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
			$("#inskinPL1").html(newValue);
		}
		$(".sticky-block").css({
			"height" : "0px"
		});

	}
});

integration.on('layoutChange', function(e) {
	//Scroll and Timeout functions to adjust pagelead when nav slides in or out after load
	var stylesCSS = '<style id="inskinPL2" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	
	var headHeight = $("header.header.header--pinned").outerHeight();
	var plHidden = false;
	var scrolled = false;
	var newValue;

	$(document).on('scroll', function() {
		$("#inskinPL1").remove();
		var headerPresent = $("header.header.header--hide").length;
		if (plHidden == false) {
			scrolled = true;
			var scrollTop = $(document).scrollTop();
			if (scrollTop > headHeight) {
				if (headerPresent == 1) {
					console.log("inskin nohead");
					newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
					$("#inskinPL2").html(newValue);
				} else {
					console.log("inskin head");
					newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
					$("#inskinPL2").html(newValue);
				}
			}
		}
	});

	//Stops the above adjustments based on nav bar after 5secs (When Pagelead is no longer fixed)
	setTimeout(function() {
		plHidden = true;
		
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		$("#inskinPL2").remove();
	}, 5000);

});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
