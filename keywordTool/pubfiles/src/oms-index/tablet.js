(function () {
	// get all parameters passed to us:
	var params = getScriptURLParams(/tablet\.js\?autoload([^A-Za-z0-9]+)(.*)$/);

	// map OMS site IDs to InSkin section IDs:
	var map = {
		'test': '124477',
		'oms.derwesten.de': '125044',
		'disp_tzk_pdv_suedkurier.de_de': '125045',
		'oms.stuttgarter-zeitung.de': '125046',
		'oms.stuttgarter-nachrichten.de': '125047',
		'oms.rp-online.de': '125048',
		'oms.fronline.de': '125049',
		'oms.svz.de': '125050',
		'oms.nordkurier.de': '125051',
		'oms.mopo.de': '125052',
		'oms.rundschau-online.de': '125053',
		'oms.express.de': '125054',
		'oms.berliner-zeitung.de': '125055',
		'oms.berliner-kurier.de': '125056',
		'oms.hertenerallgemeine.de': '125057',
		'oms.wn.de': '125059',
		'disp_tzk_pdv_augsburger-allgemeine.de_sd': '125058',
		'oms.dattelnermorgenpost.de': '125114',
		'oms.marlerzeitung.de': '125115',
		'oms.stimbergzeitung.de': '125116',
		'oms.waltroperzeitung.de': '125117',
		'oms.general-anzeiger-bonn.de': '125118',
		'oms.ksta.de': '125119',
		'oms.ruhr-nachrichten.de': '125120',
		'disp_tzk_oms_aachener-zeitung.de_sd': '125113',
		'oms.fnweb.de': '125121',
		'oms.mannheimer-morgen.de': '125122',
		'oms.nordbayern1.de': '125123',
		'oms.shz1.de': '125124',
		'oms.wiesbadener-kurier.de': '125125',
		'oms.fnp.de': '125126',
		'disp_tzk_oms_aachener-nachrichten.de_sd': '125112',
		'oms.schweriner-volkszeitung.de': '125050',
		'oms.westline1.de': '125310',
		'disp_tzk_hurt_hurriyet.com.tr_sd': '125311',
		'pn.auto.de': '125313',
		'pn.enorm-magazin.de': '125316',
		'oms.tonight.de': '125317',
		/*'oms.dorstener-zeitung.de' : '125120',
		'oms.emsdettener-volkszeitung.de' : '125120',
		'oms.grevener-zeitung.de' : '125120',
		'oms.halterner-zeitung.de' : '125120',
		'oms.muensterland-zeitung.de' : '125120',*/
		'disp_tzk_mad_maz-online.de_sd': '125312',
		'disp_tzk_mad_sn-online.de_sd': '125312',
		'disp_tzk_mad_waz-online.de_sd': '125312',
		'disp_tzk_mad_paz-online.de_sd': '125312',
		'disp_tzk_mad_haz.de_sd': '125312',
		'oms.abendzeitung.de': '125315',
		'pn.antennebayern.de': '125314',
		'oms.neue-oz.de': '125383',
		'oms.rosenheim24.de': '125384',
		'oms.innsalzach24.de': '125384',
		'oms.chiemgau24.de': '125384',
		'oms.bgland24.de': '125384',
		'oms.grevener-zeitung.de': '125364',
		'oms.wk.sportbuzzer.de': '125622',
		'oms.dnn.sportbuzzer.de': '125622',
		'oms.lvz.sportbuzzer.de': '125622',
		'oms.gt.sportbuzzer.de': '125622',
		'oms.haz.sportbuzzer.de': '125622',
		'oms.np.sportbuzzer.de': '125622',
		'oms.op.sportbuzzer.de': '125622',
		'oms.paz.sportbuzzer.de': '125622',
		'oms.sn-sportbuzzer.de': '125622',
		'oms.waz.sportbuzzer.de': '125622',
		'oms.wlzfz.sportbuzzer.de': '125622',
		'oms.maz.sportbuzzer.de': '125622',
		'oms.kn.sportbuzzer.de': '125622',
		'oms.ln.sportbuzzer.de': '125622',
		'oms.oz.sportbuzzer.de': '125622',
		'haz.sportbuzzer.de/adtest': '125622',
		'disp_tzk_oms_azonline.de_sd': '125723',
		'oms.radikal.com.tr': '125686',
		'oms.giessener-anzeiger.de': '125987',
		'oms.rhein-main-presse.de': '125988',
		'oms.echo-online.de': '126030',
		'disp_tzk_oms_muenstersche-zeitung.de_sd': '126035',
		'disp_tzk_oms_westfalen-blatt.de_sd': '126029',
		'disp_tzk_oms_wiesbadener-tagblatt.de_sd': '125989',
		'disp_tzk_pdv_mainpost.de_sd': '126031',
		'oms.giessener-allgemeine.de': '126038',
		'disp_tzk_oms_buerstaedter-zeitung.de_sd': '126039',
		'oms.gelnhaeuser-tageblatt.de': '126040',
		'oms.haller-kreisblatt.de': '126115',
		'oms.immobilien.rhein-main-presse.de': '126116',
		'oms.schwaebische-post.de': '126117',
		'oms.gmuender-anzeiger.info': '126117',
		'oms.wochenpost.info': '126117',
		'oms.gmuender-tagespost.de': '126118',
		'disp_tzk_oms_wormser-zeitung.de_sd': '126119',
		'oms.usinger-anzeiger.de': '126120',
		'oms.oberhessische-zeitung.de': '126121',
		'disp_tzk_pdv_main-spitze.de_sd': '126122',
		'oms.lauterbacher-anzeiger.de': '126123',
		'disp_tzk_oms_lampertheimer-zeitung.de_sd': '126124',
		'oms.kreis-anzeiger.de': '126125',
		'disp_tzk_oms_hofheimer-zeitung.de_sd': '126126',
		'disp_tzk_oms_hochheimer-zeitung.de_sd': '126127'
		//'disp_tzk_mad_goettinger-tageblatt.de_sd' : '124640'
	};

	// get the OMS site ID:
	var siteID = params['siteID'] || null;
	var advertIDs = params['srv_AdvertIDs'] || null;
	var campaignID = params['srv_CampaignID'] || null;
	var siteUrl = window.location.href;
	try {
		var placementData = currentWindow.frameElement.id;
	} catch (e) {
		console.log(e);
	}


// in case we don't have a mapping for the supplied site ID:
if (!siteID || !map[siteID]) {
	try {
  url = 'https://ism-telemetry.appspot.com/rec?d=' + encodeURIComponent(JSON.stringify({
	type: 'oms',
	platform: 'desktop',
	omsSiteId: siteID,
	URL: siteUrl,
	placement_Name: placementData,
	advertID: advertIDs
  }));

  img = new Image();
  img.src = url;
	} catch (e) {
	}

	return;
}

	// add the appropriate section ID:
	params['srv_SectionID'] = map[siteID];

	// create the URL to the publisher file:
	var url = [CDN_URL, 'publishercode/', params.srv_SectionID, '/default.js?autoload'].join('');
	for (var key in params) {
		url += '&' + key + '=' + encodeURIComponent(params[key]);
	}

	// load the publisher file:
	loadJS(url);
})();