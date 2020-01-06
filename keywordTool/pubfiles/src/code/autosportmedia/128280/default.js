integration.meta = {
   'sectionID' : '128280',
   'siteName' : 'Motor1 - Smartphone - ( UK )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '999941',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};


integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
       if ($(".m1-header-main").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".m1-header-main");
        integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -50
        });
       }
       $('body').addClass('inskinLoaded');
       var stylesCSS = '<style type="text/css">';
       stylesCSS += '.inskinLoaded [id^="page_index_"] {overflow: visible}';
       stylesCSS += '.inskinLoaded .m1-header-main {width: calc(100% + 74px); max-width: calc(100% + 74px)}';
       stylesCSS += '.inskinLoaded .m1-header-ad {display: none}';
       stylesCSS += '</style>'
       $('head').append(stylesCSS);
   }

   if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
       integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
   }
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 320;\ngoogle_ad_height = 100;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};