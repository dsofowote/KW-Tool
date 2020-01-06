integration.meta = {
    'sectionID' : '124694',
    'siteName' : 'LVZ Online - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706259',
    'plr_PageAlignment' : 'left',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
		// "plr_GetContentHeightVersion" : 2,
		// "plr_EnableActiveResize" : false,
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			$(".page, .pdb-header, .pdb-breadcrumb, .pdb-footer, .pdb-toptopics, .pdb-adplacement").css({"float": "none"});
    }
});

integration.on("adServed", function(e) {
	$('#adContentLeft').hide();
	//Collapse audience loop pixel
	$("img[src*='https://secure-gl.imrworldwide.com/cgi-bin/']").css({
		"height" : "1px"
	});
	var headHeight = $(".pdb-navbar").outerHeight();
	$(".ism-frame").parent().css({"top" : headHeight, "margin-left": "160px"});
	$('head').append('<style type="text/css">body {margin-left :0px !important; overflow: auto}</style>');
});
