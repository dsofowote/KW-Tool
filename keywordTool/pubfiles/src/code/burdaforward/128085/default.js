integration.meta = {
   'sectionID' : '128085',
   'siteName' : 'TV Spielfilm - Desktop - ( DE )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1304]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '974918',
   'plr_PageAlignment' : 'custom',
   'plr_FramePositionCSS' : 'margin: 0 auto; border-right: transparent solid 170px;',
   'plr_ContentW': 984,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$('#wrapper').css({
   		"width" : "984px",
   		"margin" : "0 auto",
   		"border-right" : "170px solid transparent"
   	});
   }
});
