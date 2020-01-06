/*
 * COMMON TESTS
 * ------------
 * TARGET PLATFORM: Tablet
 * ADDITIONAL CRITERIA: None
 */

/*
 * TEST: mobile_platform
 * PURPOSE: To ensure that user is on a supported mobile platform (iPhone (iOS 7+)/ Android Mobile (Android 4+))
 * INPUTS: None
 */
tests['mobile_platform'] = function() {
	/* Mobile  platforms */
   var reg_ios = /^(?=.*((iPhone).*(OS (7|8|9|10|11|12|13)_))).*$/igm;
   var reg_android = /(?=.*(android|Silk) (4|5|6|7|8|9))(?=.*(mobile)).*$/igm;
   var reg_exc_windows = /(?=.*(Windows)).*$/igm;
   if (
      ( reg_ios.test( navigator.userAgent ) || reg_android.test( navigator.userAgent ) ) &&
      !reg_exc_windows.test( navigator.userAgent )
   ){
      return( true );
   } else {
      return( false );
   }
};

/*
 * TEST: mobile_resolution
 * PURPOSE: To ensure that user's screen width meets minimum requirements (when required)
 * INPUTS: threshold - [number] minimum supported screen width
 * DEFAULT: Accept all screen resolutions
 */
tests['mobile_resolution'] = function( threshold ) {
  if ( typeof( threshold ) === 'undefined' ) {
      /* Bypass this test by default */
      return( true );
  }

  var screenwidth = Math.min( screen.width, screen.height );

  if ( screenwidth >= threshold ) {
      return( true );
  } else {
    var reg_ios = /^(?=.*((iPhone).*(OS (7|8|9|10|11|12|13)_))).*$/igm;
    var reg_android = /(?=.*(android|Silk) (4|5|6|7|8|9))(?=.*(mobile)).*$/igm;
    var reg_exc_windows = /(?=.*(Windows)).*$/igm;
    if (
       ( reg_ios.test( navigator.userAgent ) || reg_android.test( navigator.userAgent ) ) &&
       !reg_exc_windows.test( navigator.userAgent )
    ){
       var platform = "Smartphone_";
    } else {
       var platform = "";
    }
    return( platform + screen.width + 'x' + screen.height );
  }
};


/*
 * TEST: mobile_height
 * PURPOSE: To ensure that user's screen height meets minimum requirements (when required)
 * INPUTS: threshold - [number] minimum supported screen width
 * DEFAULT: Minimum screen resolution height 500px
 */
tests['mobile_height'] = function( threshold ) {
  if ( typeof( threshold ) === 'undefined' ) {
      /* Bypass this test by default */
      threshold = 500;
  }

  var screenheight = Math.max( screen.width, screen.height );

  if ( screenheight >= threshold ) {
      return( true );
  } else {
      return( screen.width + 'x' + screen.height );
  }
};

/*
 * TEST: mobile_portrait
 * PURPOSE: To ensure that user's phone is in portrait mode
 * INPUTS: none
 */
tests['mobile_portrait'] = function() {
  if (window.matchMedia("(orientation: portrait)").matches) {
      return( true );
  }else if (window.matchMedia("(orientation: landscape)").matches) {
      return('landscape');
  }else {
      return('unknown');
  }
};
