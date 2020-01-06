/* 
 * COMMON TESTS
 * ------------
 * TARGET PLATFORM: Desktop
 * ADDITIONAL CRITERIA: None
 */

/*
 * TEST: desktop_platform
 * PURPOSE: To ensure that user is on a supported desktop platform
 * INPUTS: None
 * DEFAULT: Accept Windows / Mac / Linux
 */
tests['desktop_platform'] = function() {
	var reg_win2000 = /Windows\sNT\s([5]{1,}([\.][0]{1,}))/igm;
	var reg_winXP = /Windows\sNT\s([5]{1,}([\.][1-2]{1,}))/igm;
	var reg_winVista = /Windows\sNT\s([6]{1,}([\.][0]{1,}))/igm;
	var reg_win7 = /Windows\sNT\s([6]{1,}([\.][1]{1,}))/igm;
    var reg_win8 = /(?!.*Touch)Windows\sNT\s([6]{1,}([\.][2-3]{1,}))/igm;
    var reg_win10 = /.*(Windows NT 10.).*/igm;
    var reg_mac = /^(?=.*Macintosh)(?!.*(android|Silk)).*$/igm;
    var reg_linux = /^(?=.*(Linux))(?!.*(android|Silk)).*$/igm;
   if (  
      reg_win2000.test( navigator.userAgent ) ||
      reg_winXP.test( navigator.userAgent ) ||
      reg_winVista.test( navigator.userAgent ) ||
      reg_win7.test( navigator.userAgent ) ||
      reg_win8.test( navigator.userAgent ) ||
      reg_win10.test( navigator.userAgent ) ||
      reg_mac.test( navigator.userAgent ) ||
      reg_linux.test( navigator.userAgent ) 
   ){
      return( true );
   } else {
      return( false );
   }
};

/*
 * TEST: desktop_brower
 * PURPOSE: To ensure if browser is a supported version
 * INPUTS: None
 */
tests['desktop_browser'] = function() {
	var reg_opera = /(Opera|OPR)[/\s](\d{1,}([\.][\.A-Za-z0-9]{1,}))/igm;
	var reg_firefox = /(?!.*(Navigator|Opera))(Firefox[/\s](\d{1,}([\.][\.A-Za-z0-9]{1,})))/igm;
	var reg_chrome = /(?!.*OPR).(?=.*Safari)((Chrome|CriOS)[/\s](\d{1,}([\.][\.A-Za-z0-9]{1,})))/igm;
	var reg_ie11 = /(?=Trident).+(rv(:|\s)([11]{1,}([\.]\d{1,})))/igm;
	var reg_edge = /.*(Windows NT 10.).*(Edge\/12.).*/igm;
	var reg_safari = /^(?=.*(Safari))(?!.*(Chrome|CriOS)).*$/igm;
	var reg_safariExclude = /^(?=.*windows).*$/igm;
   if (
      reg_opera.test( navigator.userAgent ) ||
      reg_firefox.test( navigator.userAgent ) ||
      reg_chrome.test( navigator.userAgent ) ||
      reg_ie11.test( navigator.userAgent ) ||
      reg_edge.test( navigator.userAgent ) ||
      ( 
         reg_safari.test( navigator.userAgent ) &&
         reg_safariExclude.test( navigator.userAgent ) == false
      )
   ){
      return( true );
   } else {
      return( false );
   }
};

/*
 * TEST: desktop_resolution
 * PURPOSE: To ensure that user's screen width meets minimum requirements
 * INPUTS: threshold - [number] minimum supported screen width
 * DEFAULT: Accept 1260px width or greater
 */
tests['desktop_resolution'] = function( threshold ) {
  if ( threshold === undefined ) {
    threshold = 1260;
  }

  if ( screen.width >= threshold ) {
    return( true );
  }
  else {
    return( false );
  }
};
