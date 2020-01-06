integration.meta = {
  "sectionID": "124629",
  "siteName": "Allg�uer Zeitung",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706251',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_GetContentHeightVersion": 2,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 1268,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adServed", function(e) {
  $("#main").css({
  	"margin-top" : "0px"
  });
  $("#main, .header").css({
  	"width" : "1240px",
    "margin" : "0 auto"
  });
  $("body").css({
  	"margin-bottom" : "0px"
  });
  $("#mobhead").css({
  	"position" : "absolute"
  });
  var specialCSS = "";
  specialCSS += "<style>@media (min-width: 480px){";
  specialCSS += "#main{ margin-left : auto; }";
  specialCSS += "}@media (min-width: 768px){";
  specialCSS += "#main{ margin-left : auto; }";
  specialCSS += "}@media (min-width: 990px){";
  specialCSS += "#main{ margin-left : auto; }";
  specialCSS += "}@media (min-width: 1240px){";
  specialCSS += "#main{ margin-left : -635px; }";
  specialCSS += "}</style>";
  $("head").append(specialCSS);
});

integration.on("layoutChange", function(e) {
  var frtop = e.data.plr_FrameTop;
  $("#mobhead").css({
  	"top" : frtop
  });
});
