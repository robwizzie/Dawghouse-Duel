/* ══════════════════════════════════════════════════════════════
   CATEGORY: NFL — ALL-TIME GREATS

   The all-timers. Old photographs are half the difficulty here:
   plenty of these are black and white and in a leather helmet.

   Artwork: node tools/fetch-wiki-images.js nfl-goats
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'nfl-goats',
  name: 'NFL — All-Time Greats',
  blurb: 'The pantheon. Rings, records and arguments.',
  wiki: 'en.wikipedia.org',
  items: [

    /* ── QUARTERBACK ── */
    {slug:'tom-brady', name:'Tom Brady', alt:['Brady','TB12'], note:'Quarterback', tier:'easy', clue:'Seven rings. The argument ender.'},
    {slug:'joe-montana', name:'Joe Montana', alt:['Montana'], note:'Quarterback', tier:'easy', clue:'Four rings, never threw a Super Bowl pick.'},
    {slug:'peyton-manning', name:'Peyton Manning', alt:['Manning'], note:'Quarterback', tier:'easy', clue:'Omaha.'},
    {slug:'john-elway', name:'John Elway', alt:['Elway'], note:'Quarterback', tier:'mid', clue:'The Drive. Went out on top.'},
    {slug:'dan-marino', name:'Dan Marino', alt:['Marino'], note:'Quarterback', tier:'mid', clue:'Quickest release ever. Never won it.'},
    {slug:'brett-favre', name:'Brett Favre', alt:['Favre'], note:'Quarterback', tier:'mid', clue:'Packers gunslinger. Never missed a start.'},
    {slug:'johnny-unitas', name:'Johnny Unitas', alt:['Unitas'], note:'Quarterback', tier:'deep', clue:'Black high-tops. Invented the position.'},
    {slug:'otto-graham', name:'Otto Graham', alt:['Graham'], note:'Quarterback', tier:'deep', clue:'Ten championship games in ten years.'},
    {slug:'sammy-baugh', name:'Sammy Baugh', alt:['Baugh'], note:'Quarterback', tier:'deep', clue:'Slingin’ Sammy. Also punted and played defence.'},
    {slug:'steve-young', name:'Steve Young', alt:['Young'], note:'Quarterback', tier:'mid', clue:'Followed Montana and won anyway.'},
    {slug:'troy-aikman', name:'Troy Aikman', alt:['Aikman'], note:'Quarterback', tier:'mid', clue:'Three rings in the nineties.'},
    {slug:'aaron-rodgers', name:'Aaron Rodgers', alt:['Rodgers'], note:'Quarterback', tier:'easy', clue:'Packers. The belt.'},
    {slug:'drew-brees', name:'Drew Brees', alt:['Brees'], note:'Quarterback', tier:'mid', clue:'Saints. Rebuilt a city’s team.'},
    {slug:'ben-roethlisberger', name:'Ben Roethlisberger', alt:['Big Ben'], note:'Quarterback', tier:'mid', clue:'Steelers. Impossible to sack.'},
    {slug:'terry-bradshaw', name:'Terry Bradshaw', alt:['Bradshaw'], note:'Quarterback', tier:'deep', clue:'Four rings in the seventies.'},

    /* ── WIDE RECEIVER ── */
    {slug:'jerry-rice', name:'Jerry Rice', alt:['Rice'], note:'Wide receiver', tier:'easy', clue:'Every receiving record there is.'},
    {slug:'randy-moss', name:'Randy Moss', alt:['Moss'], note:'Wide receiver', tier:'easy', clue:'Straight cash. Mossed people.'},
    {slug:'terrell-owens', name:'Terrell Owens', alt:['T.O.','Owens'], note:'Wide receiver', tier:'mid', clue:'Popcorn on the star.'},

    /* ── RUNNING BACK ── */
    {slug:'walter-payton', name:'Walter Payton', alt:['Sweetness','Payton'], note:'Running back', tier:'easy', clue:'Sweetness. Ran up hills for fun.'},
    {slug:'barry-sanders', name:'Barry Sanders', alt:['Barry'], note:'Running back', tier:'easy', clue:'Impossible to tackle. Retired early.'},
    {slug:'emmitt-smith', name:'Emmitt Smith', alt:['Emmitt'], note:'Running back', tier:'mid', clue:'All-time rushing leader.'},
    {slug:'jim-brown', name:'Jim Brown', alt:['Brown'], note:'Running back', tier:'mid', clue:'Never missed a game. Left at his peak.'},
    {slug:'gale-sayers', name:'Gale Sayers', alt:['Sayers'], note:'Running back', tier:'deep', clue:'Six touchdowns in one game.'},
    {slug:'earl-campbell', name:'Earl Campbell', alt:['Campbell'], note:'Running back', tier:'deep', clue:'Ran through people, not around.'},
    {slug:'marshall-faulk', name:'Marshall Faulk', alt:['Faulk'], note:'Running back', tier:'mid', clue:'The Greatest Show on Turf.'},
    {slug:'ladainian-tomlinson', name:'LaDainian Tomlinson', alt:['LT','Tomlinson'], note:'Running back', tier:'mid', clue:'Chargers. Visor.'},
    {slug:'adrian-peterson', name:'Adrian Peterson', alt:['AD','Peterson'], note:'Running back', tier:'mid', clue:'Came back from a torn ACL and ran for 2,000.'},
    {slug:'marcus-allen', name:'Marcus Allen', alt:['Allen'], note:'Running back', tier:'deep', clue:'That Super Bowl reverse.'},
    {slug:'franco-harris', name:'Franco Harris', alt:['Harris'], note:'Running back', tier:'deep', clue:'The Immaculate Reception.'},
    {slug:'bo-jackson', name:'Bo Jackson', alt:['Bo'], note:'Running back', tier:'mid', clue:'Bo Knows. Also a baseball All-Star.'},

    /* ── TIGHT END ── */
    {slug:'rob-gronkowski', name:'Rob Gronkowski', alt:['Gronk'], note:'Tight end', tier:'easy', clue:'Gronk. Spiked the ball into oblivion.'},
    {slug:'tony-gonzalez', name:'Tony Gonzalez', alt:['Gonzalez'], note:'Tight end', tier:'mid', clue:'Basketball player who redefined the position.'},

    /* ── DEFENCE ── */
    {slug:'lawrence-taylor', name:'Lawrence Taylor', alt:['LT','Taylor'], note:'Defence', tier:'easy', clue:'Changed how offences are built.'},
    {slug:'reggie-white', name:'Reggie White', alt:['White'], note:'Defence', tier:'easy', clue:'The Minister of Defense.'},
    {slug:'deion-sanders', name:'Deion Sanders', alt:['Prime Time','Deion'], note:'Defence', tier:'easy', clue:'Prime Time. Nobody threw his way.'},
    {slug:'dick-butkus', name:'Dick Butkus', alt:['Butkus'], note:'Defence', tier:'deep', clue:'The most feared man in the sixties.'},
    {slug:'ronnie-lott', name:'Ronnie Lott', alt:['Lott'], note:'Defence', tier:'mid', clue:'Had part of a finger removed to keep playing.'},
    {slug:'bruce-smith', name:'Bruce Smith', alt:['Smith'], note:'Defence', tier:'mid', clue:'All-time sack leader.'},
    {slug:'ray-lewis', name:'Ray Lewis', alt:['Lewis'], note:'Defence', tier:'easy', clue:'The dance.'},
    {slug:'joe-greene', name:'Joe Greene', alt:['Mean Joe'], note:'Defence', tier:'mid', clue:'Mean Joe. The Steel Curtain.'},
    {slug:'ed-reed', name:'Ed Reed', alt:['Reed'], note:'Defence', tier:'mid', clue:'Read quarterbacks before they threw.'},
    {slug:'champ-bailey', name:'Champ Bailey', alt:['Bailey'], note:'Defence', tier:'deep', clue:'Broncos corner.'},
    {slug:'charles-woodson', name:'Charles Woodson', alt:['Woodson'], note:'Defence', tier:'mid', clue:'Only defensive back to win the Heisman.'},
    {slug:'michael-strahan', name:'Michael Strahan', alt:['Strahan'], note:'Defence', tier:'mid', clue:'The gap. Now on television.'},
    {slug:'warren-sapp', name:'Warren Sapp', alt:['Sapp'], note:'Defence', tier:'deep', clue:'Buccaneers interior wrecking ball.'},
    {slug:'junior-seau', name:'Junior Seau', alt:['Seau'], note:'Defence', tier:'mid', clue:'Chargers linebacker.'},
    {slug:'rod-woodson', name:'Rod Woodson', alt:['Woodson'], note:'Defence', tier:'deep', clue:'Played corner and safety at a Hall of Fame level.'},

    /* ── OFFENSIVE LINE ── */
    {slug:'anthony-munoz', name:'Anthony Muñoz', alt:['Munoz'], note:'Offensive line', tier:'deep', clue:'The standard for left tackles.', page:'Anthony Muñoz'},
    {slug:'jim-thorpe', name:'Jim Thorpe', alt:['Thorpe'], note:'Offensive line', tier:'deep', clue:'Olympic champion who also played pro football.'}
  ]
});
