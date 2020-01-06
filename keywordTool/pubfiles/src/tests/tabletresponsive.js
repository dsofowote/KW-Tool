/*
 * COMMON TESTS
 * TARGET PLATFORM: Tablet
 * ADDITIONAL CRITERIA: Responsive sites
 */


/*
 * TEST: tabletresponsive_platform
 * PURPOSE: To ensure that user is on a iPad running iOS 7 or above
 * INPUTS: None
 */
tests['tabletresponsive_platform'] = function() {
    var reg_tablet = /^(?=.*(iPad).*(OS (7|8|9|10|11|12|13)_)).*$/igm;

    if (reg_tablet.test(navigator.userAgent)) {
        return (true);
    } else {
        return (false);
    }
};