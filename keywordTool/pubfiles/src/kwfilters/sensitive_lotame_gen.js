/********************************************************************************************************/
/* IMPORTANT NOTE ABOUT INVALID AD CALL OPTION (BELOW)                                                   */
/* --------------------------------------------------                                                   */
/* This option will make all requests to pages with these keywords be flagged as invalid inventory.     */
/* This will increase the discrepancy on a site. It should NOT be used on Campaign Ad Tag integrations. */
/* If used on Site Ad Tag integrations this should be noted in the Lookup Tool and used with caution.   */
/**
//
// example keyword list:
//

var myList = {
  sources: ['url', 'title', 'keywords', 'page'],
  keywords: {}
};
kwLists.push(myList);

// add keywords to the list:
myList.keywords["attack"] = {'keyword': 'sensitive_content', 'fullWord': false};
**/
/********************************************************************************************************/



integration.on('init', function () {
   /* If present check to see if integration.channelHome parameter exists in publisher file */
   if (typeof (integration.channelHome) != "undefined" && integration.channelHome.indexOf(document.location.pathname) > -1) {
      /* Channel Home targeting */
      var auto_content = {
         sources: [],
         keywords: {}
      };
      var sport_content = {
         sources: [],
         keywords: {}
      };
      var tech_content = {
       sources: [],
       keywords: {}
      };

      var finance_content = {
       sources: [],
       keywords: {}
      };

      var entertainment_content = {
       sources: [],
       keywords: {}
      };

      var gaming_content = {
       sources: [],
       keywords: {}
      };

      var health_content = {
       sources: [],
       keywords: {}
      };

      var fashion_content = {
      sources: [],
      keywords: {}
      };

   } else {

      var auto_content = {
         sources: ['page'],
         keywords: {}
      };
      var sport_content = {
         sources: ['page'],
         keywords: {}
      };
      var tech_content = {
       sources: ['page'],
       keywords: {}
      };

      var finance_content = {
       sources: ['page'],
       keywords: {}
      };

      var entertainment_content = {
       sources: ['page'],
       keywords: {}
      };

      var gaming_content = {
       sources: ['page'],
       keywords: {}
      };

      var health_content = {
       sources: ['page'],
       keywords: {}
      };

     var fashion_content = {
     sources: ['page'],
     keywords: {}
      };
   }

//Auto List URL//

var auto_url = {
  sources : ['url', 'title'],
  keywords: {}
}
kwLists.push(auto_url);

auto_url.keywords['cars'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['cars'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['auto'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['autos'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['automobile'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['drive'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['lewis hamilton'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['car'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['acura'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['alfa romeo'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['audi'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['bentley'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['bmw'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['bugatti'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['buick'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['cadillac'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['chevrolet'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['chrystler'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['citroen'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['dogdge'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['ferrari'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['fiat'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['ford'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['gmc'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['honda'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['gyundai'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['infiniti'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['jaguar'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['jeep'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['kia'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['lamborghini'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['land rover'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['lexus'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['lincoln'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['maserati'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['mazda'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['mercedes'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['mercedesbenz'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['mini'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['nissan'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['opel'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['peugeot'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['porsche'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['renault'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['rollsroyce'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['skoda'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['subaru'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['tesla'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['toyota'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['volkswagen'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['volvo'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['driving'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['race car'] = {'keyword': '1ut', 'fullWord': true};
auto_url.keywords['formula 1'] = {'keyword': '1ut', 'fullWord': true};




   //Auto List content//

kwLists.push(auto_content);

auto_content.keywords['cars'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['cars'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['auto'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['autos'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['automobile'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['drive'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['lewis hamilton'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['car'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['acura'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['alfa romeo'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['audi'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['bentley'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['bmw'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['bugatti'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['buick'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['cadillac'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['chevrolet'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['chrystler'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['citroen'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['dogdge'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['ferrari'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['fiat'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['ford'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['gmc'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['honda'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['gyundai'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['infiniti'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['jaguar'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['jeep'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['kia'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['lamborghini'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['land rover'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['lexus'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['lincoln'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['maserati'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['mazda'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['mercedes'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['mercedesbenz'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['mini'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['nissan'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['opel'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['peugeot'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['porsche'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['renault'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['rollsroyce'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['skoda'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['subaru'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['tesla'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['toyota'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['volkswagen'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['volvo'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['driving'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['race car'] = {'keyword': '1c', 'fullWord': true};
auto_content.keywords['formula 1'] = {'keyword': '1c', 'fullWord': true};


//Sports URL //
var sport_url = {
  sources : ['url', 'title'],
  keywords: {}
}
kwLists.push(sport_url);

sport_url.keywords['sport'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['sports'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['fixtures'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['premier league'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['champions league'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['cricket'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['f1'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['adventure sports'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['kayaking'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['canoeing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['crosscountry'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['rafting'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['surfing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['skibobbing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['aquatic sports'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['snorkeling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['olympic'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['bodyboarding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['diving'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['freediving'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['paddleboarding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['rowing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['scuba diving'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['synchronized swimming'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['swimming'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['aerobics'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['aikido'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['archery'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['gymnastics'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['baton twirling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['bodybuilding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['gymnastics'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['boxing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['equestrian'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['running'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['cycling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['discus throw'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['fencing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['figure skating'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['horse racing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['judo'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['karate'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['kendo'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['kickboxing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['kung fu'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['long jump'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['marathon'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['mma'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['mixed martial arts'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['muay thai'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['pole vault'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['powerlifting'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['racewalking'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['rhythmic gymnastics'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['sprint'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['sumo'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['swordfighting'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['trail running'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['trampolining'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['tumbling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['walking'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['weightlifting'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['werestling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['baseball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['tennis'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['badminton'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['bowling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['cricket'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['curling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['dodgeball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['football'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['golf'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['handball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['hockey'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['horseball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['hurling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['ice hockey'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['kickball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['lacrosse'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['paddleboarding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['water polo'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['racuetball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['rinkball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['rounders'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['rugby'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['soccer'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['softball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['squash'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['table tennic'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['unicycling '] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['basketball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['handball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['abeiling'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['bouldering'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['gliding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['kiteboarding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['kitesurfing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['parachuting'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['paragliding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['parasailing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['skateboarding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['skydiving'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['skate'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['skysurfing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['snowboarding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['wakeboarding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['windsurfing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['climbing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['hiking'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['mountaineering'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['drifting'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['formula racing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['racing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['kart racing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['rallycross'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['airsoft'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['aquathlon'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['ballooning'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['barrel racing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['biathlon'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['capoeira'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['cheerleading'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['crossfit'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['dancing'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['darts'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['decathlon'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['foosball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['gymkhana'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['heptathlon'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['jogging'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['laser tag'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['paintball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['parkour'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['pentaque'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['pool'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['triathlon'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['backstroke'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['butterfly stroke'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['winter sports'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['water sports'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['ball '] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['racetrack'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['jockey'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['olympics '] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['player'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['racer'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['swimmer'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['track'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['ring'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['velodrome'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['stadium'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['arena'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['coach'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['team'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['court'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['pool'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['field'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['athlete'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['draw'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['medal'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['referee'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['score'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['sportsmanship'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['tournament'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['whistle'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['javelin'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['lane'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['lap'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['record'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['basketball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['pass'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['dribble'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['free throw'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['hoop'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['slam dunk'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['foul '] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['timeout'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['goal'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['goalkeeper'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['volleyball'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['penalty'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['skates'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['skateboarding'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['ski boot'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['racquet'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['baseball bat'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['catcher'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['pitcher'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['base hit'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['home run'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['defeat'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['defense'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['fitness'] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['tie '] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['puck '] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['midfield '] = {'keyword': '2ut', 'fullWord': true};
sport_url.keywords['striker '] = {'keyword': '2ut', 'fullWord': true};



      //Sports content//


kwLists.push(sport_content);

sport_content.keywords['sport'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['sports'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['fixtures'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['premier league'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['champions league'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['cricket'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['f1'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['adventure sports'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['kayaking'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['canoeing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['crosscountry'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['rafting'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['surfing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['skibobbing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['aquatic sports'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['snorkeling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['olympic'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['bodyboarding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['diving'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['freediving'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['paddleboarding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['rowing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['scuba diving'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['synchronized swimming'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['swimming'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['aerobics'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['aikido'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['archery'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['gymnastics'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['baton twirling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['bodybuilding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['gymnastics'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['boxing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['equestrian'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['running'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['cycling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['discus throw'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['fencing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['figure skating'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['horse racing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['judo'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['karate'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['kendo'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['kickboxing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['kung fu'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['long jump'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['marathon'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['mma'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['mixed martial arts'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['muay thai'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['pole vault'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['powerlifting'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['racewalking'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['rhythmic gymnastics'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['sprint'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['sumo'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['swordfighting'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['trail running'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['trampolining'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['tumbling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['walking'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['weightlifting'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['werestling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['baseball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['tennis'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['badminton'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['bowling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['cricket'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['curling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['dodgeball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['football'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['golf'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['handball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['hockey'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['horseball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['hurling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['ice hockey'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['kickball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['lacrosse'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['paddleboarding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['water polo'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['racuetball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['rinkball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['rounders'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['rugby'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['soccer'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['softball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['squash'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['table tennic'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['unicycling '] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['basketball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['handball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['abeiling'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['bouldering'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['gliding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['kiteboarding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['kitesurfing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['parachuting'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['paragliding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['parasailing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['skateboarding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['skydiving'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['skate'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['skysurfing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['snowboarding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['wakeboarding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['windsurfing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['climbing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['hiking'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['mountaineering'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['drifting'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['formula racing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['racing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['kart racing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['rallycross'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['airsoft'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['aquathlon'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['ballooning'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['barrel racing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['biathlon'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['capoeira'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['cheerleading'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['crossfit'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['dancing'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['darts'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['decathlon'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['foosball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['gymkhana'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['heptathlon'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['jogging'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['laser tag'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['paintball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['parkour'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['pentaque'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['pool'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['triathlon'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['backstroke'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['butterfly stroke'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['winter sports'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['water sports'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['ball '] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['racetrack'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['jockey'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['olympics '] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['player'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['racer'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['swimmer'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['track'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['ring'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['velodrome'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['stadium'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['arena'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['coach'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['team'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['court'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['pool'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['field'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['athlete'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['draw'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['medal'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['referee'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['score'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['sportsmanship'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['tournament'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['whistle'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['javelin'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['lane'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['lap'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['record'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['basketball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['pass'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['dribble'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['free throw'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['hoop'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['slam dunk'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['foul '] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['timeout'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['goal'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['goalkeeper'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['volleyball'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['penalty'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['skates'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['skateboarding'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['ski boot'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['racquet'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['baseball bat'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['catcher'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['pitcher'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['base hit'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['home run'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['defeat'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['defense'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['fitness'] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['tie '] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['puck '] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['midfield '] = {'keyword': '2c', 'fullWord': true};
sport_content.keywords['striker '] = {'keyword': '2c', 'fullWord': true};


//Tech URL//
var tech_url = {
  sources : ['url', 'title'],
  keywords: {}
}
kwLists.push(tech_url);

tech_url.keywords['tech'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['space'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['moon'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['rocket'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['sciencetech'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['technology'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['software'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['hardware'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['innovation'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['tech news'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['advancement'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['gadget'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['science'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['computer'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['ios'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['android'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['operating system'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['install'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['pc'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['laptop'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['ram'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['geek'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['tech review'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['apple'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['microsoft'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['huawei'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['samsung'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['iphone'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['oneplus'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['desktop'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['asus'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['sony'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['oled'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['lcd'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['photography'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['acer'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['hewlett packard'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['lenovo'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['dell'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['razer'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['msi'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['iball'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['chromebook'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['toshiba'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['overclocking'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['cpu'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['gpu'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['wearables'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['wearables'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['operating system'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['camera'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['memory'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['ssd'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['motherboard'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['hard drive'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['8k'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['4k'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['resolution'] = {'keyword': '3ut', 'fullWord': true};
tech_url.keywords['logitech'] = {'keyword': '3ut', 'fullWord': true};




        //Tech content//

kwLists.push(tech_content);

tech_content.keywords['tech'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['space'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['moon'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['rocket'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['sciencetech'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['technology'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['software'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['hardware'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['innovation'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['tech news'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['advancement'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['gadget'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['science'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['computer'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['ios'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['android'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['operating system'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['install'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['pc'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['laptop'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['ram'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['geek'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['tech review'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['apple'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['microsoft'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['huawei'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['samsung'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['iphone'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['oneplus'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['desktop'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['asus'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['sony'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['oled'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['lcd'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['photography'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['acer'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['hewlett packard'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['lenovo'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['dell'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['razer'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['msi'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['iball'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['chromebook'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['toshiba'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['overclocking'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['cpu'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['gpu'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['wearables'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['wearables'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['operating system'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['camera'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['memory'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['ssd'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['motherboard'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['hard drive'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['8k'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['4k'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['resolution'] = {'keyword': '3c', 'fullWord': true};
tech_content.keywords['logitech'] = {'keyword': '3c', 'fullWord': true};


//Finance URL//
var finance_url = {
  sources : ['url', 'title'],
  keywords: {}
}
kwLists.push(finance_url);

finance_url.keywords['money'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['analysis'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['asset'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['cfa'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['client'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['compliance'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['equity'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['excel'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['financial'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['insurance'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['investment'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['licenses'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['management'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['models'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['performance'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['portfolio'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['recommendations'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['reports'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['research'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['review'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['valuation'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['investing'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['loans'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['capital'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['fsa'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['ifa'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['cfp'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['advisor'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['wealth'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['stock exchange'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['stockmarket'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['stock market'] = {'keyword': '4ut', 'fullWord': true};
finance_url.keywords['market'] = {'keyword': '4ut', 'fullWord': true};


      //Finance Content//

kwLists.push(finance_content);

finance_content.keywords['money'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['analysis'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['asset'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['cfa'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['client'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['compliance'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['equity'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['excel'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['financial'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['insurance'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['investment'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['licenses'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['management'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['models'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['performance'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['portfolio'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['recommendations'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['reports'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['research'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['review'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['valuation'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['investing'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['loans'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['capital'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['fsa'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['ifa'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['cfp'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['advisor'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['wealth'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['stock exchange'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['stockmarket'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['stock market'] = {'keyword': '4c', 'fullWord': true};
finance_content.keywords['market'] = {'keyword': '4c', 'fullWord': true};



//Entertainment URL//
var entertainment_url = {
  sources : ['url', 'title'],
  keywords: {}
}
kwLists.push(entertainment_url);

entertainment_url.keywords['film '] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['movie'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['tv show'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['pop star'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['music'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['celebrity'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['showbiz'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['tv'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['premeire '] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['season'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['series'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['boxset'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['nowtv'] = {'keyword': '5ut', 'fullWord': true};
entertainment_url.keywords['hbo'] = {'keyword': '5ut', 'fullWord': true};


      //Entertainment Content//

kwLists.push(entertainment_content);

entertainment_content.keywords['film '] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['movie'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['tv show'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['pop star'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['music'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['celebrity'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['showbiz'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['tv'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['premeire '] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['season'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['series'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['boxset'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['nowtv'] = {'keyword': '5c', 'fullWord': true};
entertainment_content.keywords['hbo'] = {'keyword': '5c', 'fullWord': true};


//Gaming URL//
var gaming_url = {
  sources : ['url', 'title'],
  keywords: {}
}
kwLists.push(gaming_url);

gaming_url.keywords['nintendo'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['sony playstation'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['xbox one'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['xbox 360'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['sega'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['gamecube'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['playstation'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['wii'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['nintendo switch'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['fortnite'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['apex legends'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['dreamcast'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['ubisoft'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['electronic arts'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['ea'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['square enix'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['bandai'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['namco'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['activision'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['valve'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['steam'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['rockstar games'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['gta'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['sony computer entertainment'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['esports'] = {'keyword': '6ut', 'fullWord': true};
gaming_url.keywords['twitch'] = {'keyword': '6ut', 'fullWord': true};



      //Gaming Content//

kwLists.push(gaming_content);

gaming_content.keywords['nintendo'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['sony playstation'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['xbox one'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['xbox 360'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['sega'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['gamecube'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['playstation'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['wii'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['nintendo switch'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['fortnite'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['apex legends'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['dreamcast'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['ubisoft'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['electronic arts'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['ea'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['square enix'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['bandai'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['namco'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['activision'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['valve'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['steam'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['rockstar games'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['gta'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['sony computer entertainment'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['esports'] = {'keyword': '6c', 'fullWord': true};
gaming_content.keywords['twitch'] = {'keyword': '6c', 'fullWord': true};



//Health + Fitness URL//
var health_url = {
  sources : ['url', 'title'],
  keywords: {}
}
kwLists.push(health_url);

health_url.keywords['health'] = {'keyword': '8ut', 'fullWord': true};
health_url.keywords['healthy'] = {'keyword': '8ut', 'fullWord': true};
health_url.keywords['fitness'] = {'keyword': '8ut', 'fullWord': true};
health_url.keywords['fit'] = {'keyword': '8ut', 'fullWord': true};
health_url.keywords['gym'] = {'keyword': '8ut', 'fullWord': true};
health_url.keywords['training'] = {'keyword': '8ut', 'fullWord': true};
health_url.keywords['vitamins'] = {'keyword': '8ut', 'fullWord': true};


      //Health + Fitness Content//

kwLists.push(health_content);

health_content.keywords['health'] = {'keyword': '8c', 'fullWord': true};
health_content.keywords['healthy'] = {'keyword': '8c', 'fullWord': true};
health_content.keywords['fitness'] = {'keyword': '8c', 'fullWord': true};
health_content.keywords['fit'] = {'keyword': '8c', 'fullWord': true};
health_content.keywords['gym'] = {'keyword': '8c', 'fullWord': true};
health_content.keywords['training'] = {'keyword': '8c', 'fullWord': true};
health_content.keywords['vitamins'] = {'keyword': '8c', 'fullWord': true};


//Fashion + Beauty URL//
var fashion_url = {
  sources : ['url', 'title'],
  keywords: {}
}
kwLists.push(fashion_url);

fashion_url.keywords['designer'] = {'keyword': '9ut', 'fullWord': true};
fashion_url.keywords['fashion'] = {'keyword': '9ut', 'fullWord': true};
fashion_url.keywords['beauty'] = {'keyword': '9ut', 'fullWord': true};
fashion_url.keywords['clothing'] = {'keyword': '9ut', 'fullWord': true};
fashion_url.keywords['bags'] = {'keyword': '9ut', 'fullWord': true};
fashion_url.keywords['accessories'] = {'keyword': '9ut', 'fullWord': true};
fashion_url.keywords['jewelery'] = {'keyword': '9ut', 'fullWord': true};
fashion_url.keywords['shows'] = {'keyword': '9ut', 'fullWord': true};
fashion_url.keywords['high street label'] = {'keyword': '9ut', 'fullWord': true};



      //Fashion + Beauty Content//

kwLists.push(fashion_content);

fashion_content.keywords['designer'] = {'keyword': '9c', 'fullWord': true};
fashion_content.keywords['fashion'] = {'keyword': '9c', 'fullWord': true};
fashion_content.keywords['beauty'] = {'keyword': '9c', 'fullWord': true};
fashion_content.keywords['clothing'] = {'keyword': '9c', 'fullWord': true};
fashion_content.keywords['bags'] = {'keyword': '9c', 'fullWord': true};
fashion_content.keywords['accessories'] = {'keyword': '9c', 'fullWord': true};
fashion_content.keywords['jewelery'] = {'keyword': '9c', 'fullWord': true};
fashion_content.keywords['shows'] = {'keyword': '9c', 'fullWord': true};
fashion_content.keywords['high street label'] = {'keyword': '9c', 'fullWord': true};
});
