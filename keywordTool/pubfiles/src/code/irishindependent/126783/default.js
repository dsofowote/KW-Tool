integration.meta = {
	'sectionID' : '126783',
	'siteName' : 'Irish Independent - Smartphone - (UK)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [0]
};

integration.channelHome = [
   '/',
   '/sport/',
   '/irish-news/',
   '/business/',
   '/sport/rugby/',
   '/news/',
   '/world-news/',
   '/life/',
   '/entertainment/'
];

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '963519',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('header').height();
		$("html").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded *{min-width: 0;}';
		stylesCSS += 'html .inskinLoaded {overflow: visible;}';
		stylesCSS += '.inskinLoaded div.ism-frame, .inskinLoaded .ism-frame-unit{margin-bottom: 0 !important;}';
		stylesCSS += '.inskinLoaded .root-a>header{width: 100% !important;}';
		stylesCSS += '.inskinLoaded body{margin-top: ' + headerHeight + 'px; overflow:visible;}';
		stylesCSS += '.inskinLoaded .root-a>section{padding-top:0px;}';
		stylesCSS += '.inskinLoaded .indo_survey {display: none !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});
integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 150);
});
integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 150);
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/7380/m.independent.ie/inskin\" height=\"1\" width=\"1\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
