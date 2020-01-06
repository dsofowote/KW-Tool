integration.meta = {
	'sectionID' : '127963',
	'siteName' : 'Football.fr    - Smartphone - ( FR )',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '956650',
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
		integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .content-right-fixed, .inskinLoaded .header-fixed{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}';
		stylesCSS += '.inskinLoaded .search-section.search--opened{top: 100px !important;}';
		stylesCSS += '.inskinLoaded div.selector select{left: ' + integration.custom.PageSkinRightPanel + 'px !important; width: 68px !important;}';
		stylesCSS += '.inskinLoaded.inskinLoaded #football-oas-middle-mobile{margin: 0 !important;}';
		stylesCSS += '.inskinLoaded #aside{top: 100px; width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px);}';
		stylesCSS += '.inskinLoaded .cc_banner{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px);}';
		stylesCSS += '.inskinLoaded .navbar-wrapper{padding-right: 90px;}';
		stylesCSS += '.inskinLoaded #playerDaily, .inskinLoaded .wbtz-embed-main-sticky{right: ' + integration.custom.PageSkinRightPanel + 'px !important;}';
		stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .main-header-nav .button{width: 30px; margin-left: 0;}}';
		stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .navbar .navbar-brand{left: 50px;} .inskinLoaded  #header h1{width: 100px !important;}}';
		stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .main-header-nav{margin-right: 10px;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		if ($(document).scrollTop() == 0) {
			$('#header').removeClass('header-fixed');
		}
	}
});

integration.on('adClose', function(e) {
	$("body").removeClass("inskinLoaded");
});
/* Passback Tag */
window.ISMPassback = function() {
   return "\n<script language=\"JavaScript\" type=\"text/javascript\"> rp_account = '9585'; rp_site = '52158'; rp_zonesize = '285116-43'; rp_adtype = 'js'; rp_smartfile = '[SMART FILE URL]'; <\\script> <script type=\"text/javascript\" src=\"http://ads.rubiconproject.com/ad/9585.js\"><\\script>";
};
