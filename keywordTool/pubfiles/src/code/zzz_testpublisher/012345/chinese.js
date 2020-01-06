integration.meta = {
	"sectionID": "012345",
	"siteName": "Richard Test",
	"publisher": "Richard Test",
	"platform": "desktop"
};

integration.params = {
	'mf_siteId': '706089',
	//'BASE_URL': 'https://techops.inskinmedia.com/~rstrang/isfe/isfe/out/raw',
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_ContentW': 960,
	'plr_UseCreativeSettings': true,
	'plr_EnableLotame': true,
	'plr_Multiwin':true,
	//'plr_AdzerkOnly' : false,
	//'plr_AdProviders' :"[ISAP]"
	//'plr_CheckOptOut' : true,
	//'plr_ConsentString' : "BOWI6UPOWI6UPAKABBENBxoAAAAiAAJATAgKwoAggPYBAAAAACiNCCgCAAQAAQACQASAAgEgAAEgAAAACAAAQAAAAEBAAAAAAAAAAAAAAACAABAAAAAAAAAA"
};

integration.on("init", function (e) {
	// var host = document.location.hostname;
	// var scotSites = ["www.arbroathherald.co.uk", "www.berwick-advertiser.co.uk", "www.berwickshirenews.co.uk", "www.brechinadvertiser.co.uk", "www.buchanobserver.co.uk", "www.carricktoday.co.uk", "www.cumbernauld-news.co.uk", "www.deesidepiper.co.uk", "www.fifetoday.co.uk", "www.edinburghnews.scotsman.com", "www.falkirkherald.co.uk", "www.fifetoday.co.uk", "www.fifetoday.co.uk", "www.forfardispatch.co.uk", "www.gallowaygazette.co.uk", "www.fifetoday.co.uk", "www.kirkintilloch-herald.co.uk", "www.carlukegazette.co.uk", "www.linlithgowgazette.co.uk", "www.mearnsleaders.co.uk ", "www.midlothianadvertiser.co.uk", "www.milngavieherald.co.uk", "www.montrosereview.co.uk", "www.motherwelltimes.co.uk", "www.scotsman.co.uk", "www.southernreporter.co.uk", "www.stornowaygazette .co.uk", "www.buteman.co.uk", "www.alloaadvertiser.com", "www.ardrossanherald.com", "www.ayradvertiser.com", "www.bordertelegraph.com", "www.centralfifetimes.com", "www.clydebankpost.co.uk", "www.cumnockchronicle.com", "www.dumbartonreporter.co.uk", "www.dunfermlinepress.com", "www.eastlothiancourier.com", "www.irvinetimes.com", "www.eveningtimes.co.uk", "www.greenocktelegraph.co.uk", "www.helensburghadvertiser.co.uk", "www.largsandmillportnews.com", "www.the-gazette.co.uk", "www.the-gazette.co.uk", "www.peeblesshirenews.com", "www.heraldscotland.com", "www.heraldscotland.com", "www.thenational.scot", "www.kincardineshireobserver.co.uk", "www.inverurieherald.co.uk", "www.ellontimes.co.uk", "www.fraserburghherald.co.uk"];
	// var n = scotSites.includes(host);
	// if (n === true){
	// 	integration.params.srv_Keywords = "scottish_site";
	// 	console.log("scottish site");
	// }
	// else{
	// 	console.log("non scottish site");
	// };
});