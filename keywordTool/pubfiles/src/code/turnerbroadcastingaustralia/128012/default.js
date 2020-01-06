integration.meta = {
   'sectionID' : '128012',
   'siteName' : 'Cartoon Network - Desktop - (AU)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1264]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '967448',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1004,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : -20
};
integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("head").append('<style>body{background-image: none !important;}</style>');
   	$("head").append('<style>#all-games-wrapper, #site-wrap, #siteFooter, #header, #contenido, #main_menu, .group{margin: 0 auto !important; width: 1004px !important;}</style>');
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- Async Tag // Tag for network 755: Turner Entertainment // Website: CartoonNetwork AU // Page: MCN_house_redirects // Placement: MCN_house_redirect_1_1x1_Skin (6502619) // created at: Jan 16, 2018 7:47:21 AM -->\n<script type=\"text/javascript\" src=\"https://aka-cdn-ns.adtech.de/dt/common/DAC.js\"><\\script>\n<div id=\"6502619\"><noscript><a href=\"https://adserver.adtech.de/adlink|3.0|755.1|6502619|0|16|ADTECH;loc=300;key=key1+key2+key3+key4;alias=\" target=\"_blank\"><img src=\"https://adserver.adtech.de/adserv|3.0|755.1|6502619|0|16|ADTECH;loc=300;key=key1+key2+key3+key4;alias=\" border=\"0\" width=\"1\" height=\"1\"></a></noscript></div>\n<script>\nADTECH.config.page = { protocol: 'https', server: 'adserver.adtech.de', network: '755.1', siteid: '762001', params: { loc: '100' }};\nADTECH.config.placements[6502619] = { sizeid: '16', params: { alias: '', target: '_blank' }};\nADTECH.loadAd(6502619);\n<\\script>";
};